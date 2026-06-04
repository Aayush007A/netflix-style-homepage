"use client";

import { ThemeToggle } from "./theme-toggle";
import { Search, Bell, UserCircle2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/10 dark:bg-zinc-900/70 backdrop-blur-md border-b border-white/10 dark:border-zinc-800/30 shadow-sm">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold text-red-600 tracking-tight select-none">NETFLIX</span>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90 dark:text-white/80">
            <li className="hover:text-red-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Movies</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Series</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">My List</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <button className="p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all" aria-label="Search">
            <Search className="size-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all" aria-label="Notifications">
            <Bell className="size-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all" aria-label="Profile">
            <UserCircle2 className="size-6" />
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
