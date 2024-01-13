import { SearchMovie } from ".";

const LOCAL_STORAGE_KEY = "MovieDatabase-FavoriteMovies";

export function getFavoriteMovies(): SearchMovie[] {
  const jsonData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return [];
}

export function addToFavoriteMovies(movie: SearchMovie) {
  const oldFavMovies = getFavoriteMovies();
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify([movie, ...oldFavMovies])
  );
}

export function removeFromFavoriteMovies(movieId: string) {
  const movies = getFavoriteMovies();
  const movieIndex = movies.findIndex((movie) => movie.imdbID === movieId);
  if (movieIndex > -1) {
    movies.splice(movieIndex, 1);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
  }
}
