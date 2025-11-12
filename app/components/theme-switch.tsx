"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only set mounted to true after component mounts on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme which is the actual theme (resolves "system" to "light" or "dark")
  // Default to "light" if not mounted yet to ensure consistent server-side rendering
  const currentTheme = mounted && resolvedTheme ? resolvedTheme : "light";

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      id="theme-toggle"
      aria-label={`Toggle ${currentTheme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
      suppressHydrationWarning
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${
          mounted && currentTheme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
        aria-hidden="true"
      />
    </button>
  );
};
