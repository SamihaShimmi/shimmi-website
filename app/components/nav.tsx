import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/": { name: "Home", icon: "🏠" },
  // "/research": { name: "Research", icon: "🔬" },
  "/publications": { name: "Publications", icon: "📚" },
  // "/projects": { name: "Projects", icon: "💻" },
  "/cv": { name: "CV", icon: "📄" },
  // "/blog": { name: "Blog", icon: "✍️" },
};

export function Navbar() {
  return (
    <nav className="py-5">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
        {Object.entries(navItems).map(([path, { name, icon }]) => (
          <Link
            key={path}
            href={path}
            className="group flex items-center gap-2 transition-all duration-300 hover:text-slate-700 dark:hover:text-slate-300 relative"
          >
            <span className="text-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300">
              {icon}
            </span>
            <span className="font-medium">{name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-400 dark:bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
