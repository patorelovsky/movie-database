import { SearchMovie } from "./moviesApi";

const LOCAL_STORAGE_KEY = "MovieDatabase-FavoriteMovies";

export function getFavoriteMovies(): SearchMovie[] {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as SearchMovie[];
  }
  return [];
}

export function addToFavoriteMovies(movie: SearchMovie) {
  const data = getFavoriteMovies();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([movie, ...data]));
}

export function removeFromFavoriteMovies(movieId: string) {
  const data = getFavoriteMovies();
  const movieIndex = data.findIndex((movie) => movie.imdbID === movieId);
  data.splice(movieIndex, 1);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
