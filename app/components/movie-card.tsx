"use client";

import Image from "next/image";
import type { Movie } from "../../lib/types";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 shadow-xl border border-white/10 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all"
      aria-label={`View details for ${movie.title}`}
    >
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        fill
        className="object-cover object-center group-hover:brightness-90 transition-all duration-300"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
        <span className="block text-white font-bold text-base truncate drop-shadow-lg">
          {movie.title}
        </span>
      </div>
    </button>
  );
}
