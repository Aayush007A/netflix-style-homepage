import type { Movie, Category } from "./types";

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "action", label: "Action" },
  { id: "adventure", label: "Adventure" },
  { id: "animation", label: "Animation" },
  { id: "biography", label: "Biography" },
  { id: "crime", label: "Crime" },
  { id: "comedy", label: "Comedy" },
  { id: "documentary", label: "Documentary" },
  { id: "drama", label: "Drama" },
];

export const movies: Movie[] = [
  {
    id: "1",
    title: "Rampage",
    description:
      "When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 6.5,
    duration: "1h 47m",
    posterUrl:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Red Sparrow",
    description:
      "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon.",
    genres: ["Biography", "Drama", "Thriller"],
    rating: 6.6,
    duration: "2h 20m",
    posterUrl:
      "https://images.unsplash.com/photo-1467987506553-8f3916508521?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1467987506553-8f3916508521?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "Sword Generation",
    description:
      "A young warrior must unite his people to fight against an ancient evil that threatens their world.",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 7.2,
    duration: "2h 10m",
    posterUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    title: "The Ocean's Call",
    description:
      "A documentary exploring the mysteries and wonders of the deep sea, narrated by world-renowned marine biologists.",
    genres: ["Documentary"],
    rating: 8.1,
    duration: "1h 30m",
    posterUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "5",
    title: "Laugh Riot",
    description:
      "A group of friends embark on a hilarious road trip full of unexpected twists and comedic mishaps.",
    genres: ["Comedy"],
    rating: 7.8,
    duration: "1h 45m",
    posterUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "Animated Dreams",
    description:
      "A heartwarming animated tale about friendship, courage, and the power of imagination.",
    genres: ["Animation", "Adventure"],
    rating: 8.3,
    duration: "1h 35m",
    posterUrl:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "7",
    title: "Crime City",
    description:
      "A gritty crime drama following detectives as they unravel a web of corruption in the city.",
    genres: ["Crime", "Drama"],
    rating: 7.0,
    duration: "2h 5m",
    posterUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "8",
    title: "Adventure Quest",
    description:
      "A group of explorers set out on a perilous journey to uncover ancient secrets and lost treasures.",
    genres: ["Adventure", "Action"],
    rating: 7.5,
    duration: "2h 15m",
    posterUrl:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80",
    bannerUrl:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80",
  },
];
