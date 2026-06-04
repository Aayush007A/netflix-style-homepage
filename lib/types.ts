export interface Movie {
  id: string;
  title: string;
  description: string;
  genres: string[];
  rating: number;
  duration: string;
  posterUrl: string;
  bannerUrl: string;
}

export interface Category {
  id: string;
  label: string;
}
