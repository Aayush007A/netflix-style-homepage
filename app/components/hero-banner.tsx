"use client";

import Image from "next/image";
import { Play, Plus } from "lucide-react";
import type { Movie } from "../../lib/types";

interface HeroBannerProps {
  movie: Movie;
  onWatch: () => void;
}

export function HeroBanner({ movie, onWatch }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[60vw] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
      <Image
        src={movie.bannerUrl}
        alt={movie.title}
        fill
        className="object-cover object-center pointer-events-none select-none"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-zinc-900/60 to-black/90" />
      <div className="relative z-10 px-6 sm:px-12 pb-12 max-w-2xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-yellow-400 font-semibold flex items-center gap-1">
            <span className="text-base">★</span>
            <span className="text-sm">{movie.rating}</span>
          </span>
          <span className="text-xs text-white/70">{movie.duration}</span>
          <span className="text-xs text-white/70">{movie.genres.join(" • ")}</span>
        </div>
        <h1 className="text-4xl text-white sm:text-5xl font-extrabold mb-3 drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-white/80 text-base mb-6 line-clamp-3 max-w-xl">
          {movie.description}
        </p>
        <div className="flex gap-4">
          <button
            onClick={onWatch}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 hover:scale-[1.03] active:scale-95 text-white font-bold shadow-xl transition-all text-base"
          >
            <Play className="size-5" />
            Watch
          </button>
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white/90 dark:hover:bg-zinc-800/90 hover:scale-[1.03] active:scale-95 text-black dark:text-white font-bold shadow-xl transition-all text-base border border-white/30 dark:border-zinc-700"
          >
            <Plus className="size-5" />
            Add List
          </button>
        </div>
      </div>
    </section>
  );
}
