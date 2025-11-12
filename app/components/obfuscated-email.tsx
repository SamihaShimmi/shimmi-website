"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  encoded: string; // Base64 encoded email parts separated by |
  className?: string;
}

// Helper function to decode base64 (works on both server and client)
function decodeBase64(str: string): string {
  try {
    if (typeof window !== 'undefined' && typeof atob !== 'undefined') {
      // Use browser's atob if available
      return atob(str);
    } else {
      // Manual base64 decoding for server-side
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      let output = '';
      let i = 0;
      str = str.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (i < str.length) {
        const enc1 = chars.indexOf(str.charAt(i++));
        const enc2 = chars.indexOf(str.charAt(i++));
        const enc3 = chars.indexOf(str.charAt(i++));
        const enc4 = chars.indexOf(str.charAt(i++));
        const chr1 = (enc1 << 2) | (enc2 >> 4);
        const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        const chr3 = ((enc3 & 3) << 6) | enc4;
        output += String.fromCharCode(chr1);
        if (enc3 !== 64) output += String.fromCharCode(chr2);
        if (enc4 !== 64) output += String.fromCharCode(chr3);
      }
      return output;
    }
  } catch {
    return '';
  }
}

export function ObfuscatedEmail({ encoded, className }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Mark as mounted
    setMounted(true);
    
    // Decode email parts only on client side
    try {
      const decoded = decodeBase64(encoded);
      const [localPart, domain] = decoded.split('|');
      if (localPart && domain) {
        const atSymbol = String.fromCharCode(64);
        const fullEmail = `${localPart}${atSymbol}${domain}`;
        setEmail(fullEmail);
        setDisplayText(fullEmail);
      }
    } catch (e) {
      // Fallback if decoding fails
      console.error('Email decoding failed');
    }
  }, [encoded]);

  // During SSR and initial render, show placeholder
  if (!mounted || !email) {
    return (
      <span className={className} suppressHydrationWarning>
        [email protected]
      </span>
    );
  }

  // Show normal email format but it's obfuscated in HTML source
  return (
    <a
      href={`mailto:${email}`}
      className={className}
    >
      {displayText}
    </a>
  );
}

