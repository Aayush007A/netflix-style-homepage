"use client";

import { useState } from "react";
import { MovieCard } from "./movie-card";
import type { Movie, Category } from "../../lib/types";

interface MovieSectionProps {
  title: string;
  categories: Category[];
  movies: Movie[];
  onCardClick: (movie: Movie) => void;
}

export function MovieSection({ title, categories, movies, onCardClick }: MovieSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);

  const filteredMovies = selectedCategory === "all"
    ? movies
    : movies.filter((m) => m.genres.includes(categories.find((c) => c.id === selectedCategory)?.label || ""));

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="inline-block">Trends Now</span>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </h2>
        <div className="hidden md:flex gap-6 text-sm text-white/60">
          <span className="cursor-pointer hover:text-white transition-colors">Popular</span>
          <span className="cursor-pointer hover:text-white transition-colors">Premieres</span>
          <span className="cursor-pointer hover:text-white transition-colors">Recently Added</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-all border
              ${selectedCategory === cat.id
                ? "bg-red-600 text-white border-red-600 shadow-lg hover:scale-105"
                : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:scale-105"}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={() => onCardClick(movie)} />
        ))}
      </div>
    </section>
  );
}
