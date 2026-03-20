"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Expertise", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">

          <div className="flex items-center gap-2">
            <img
              src="/profile.png"
              alt="Ankush"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary shadow-sm"
            />
            <Link href="/" className="font-bold text-lg tracking-tight text-slate-800 dark:text-white transition-colors">
              <span className="text-primary">Portfolio</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-custom hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5 text-slate-600 dark:text-slate-300">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-3 space-y-2">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)}
                className="block px-2 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
