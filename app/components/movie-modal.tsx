"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import type { Movie } from "../../lib/types";

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <Dialog open={!!movie} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full bg-zinc-900/95 border border-white/10 p-0 overflow-hidden">
        {movie && (
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                fill
                className="object-cover object-center rounded-l-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col gap-3">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-1">
                  {movie.title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <span className="text-yellow-400 font-semibold flex items-center gap-1">
                  <span>★</span>
                  <span>{movie.rating}</span>
                </span>
                <span>{movie.duration}</span>
                <span>{movie.genres.join(" • ")}</span>
              </div>
              <p className="text-white/90 text-base mt-2 mb-4">
                {movie.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <button className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white font-bold shadow-xl transition-all text-base">
                  Watch Now
                </button>
                <button className="px-5 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white/90 dark:hover:bg-zinc-800/90 hover:scale-105 active:scale-95 text-black dark:text-white font-bold shadow-xl transition-all text-base border border-white/30 dark:border-zinc-700">
                  Add to List
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
