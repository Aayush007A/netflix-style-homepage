"use client";

import { useState } from "react";
import { Navbar } from "./components/navbar";
import { HeroBanner } from "./components/hero-banner";
import { MovieSection } from "./components/movie-section";
import { MovieModal } from "./components/movie-modal";
import { movies, categories } from "../lib/data";
import type { Movie } from "../lib/types";

export default function Page() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-black dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <Navbar />
      <main className="flex-1">
        <HeroBanner movie={movies[0]} onWatch={() => setSelectedMovie(movies[0])} />
        <div className="px-4 sm:px-8 pb-12 max-w-7xl mx-auto w-full">
          <MovieSection
            title="Trends Now"
            categories={categories}
            movies={movies}
            onCardClick={setSelectedMovie}
          />
        </div>
      </main>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}
