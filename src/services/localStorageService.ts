import { SearchMovie } from ".";

const LOCAL_STORAGE_KEY = "MovieDatabase-FavoriteMovies";

export function getFavoriteMovies(): SearchMovie[] {
  const jsonData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return [];
}

export function addToFavoriteMovies(newMovie: SearchMovie) {
  const favMovies = getFavoriteMovies();
  const index = favMovies.findIndex(
    (movie) => movie.imdbID === newMovie.imdbID
  );
  if (index === -1) {
    favMovies.push(newMovie);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favMovies));
  }
}

export function removeFromFavoriteMovies(movieId: string) {
  const favMovies = getFavoriteMovies();
  const index = favMovies.findIndex((movie) => movie.imdbID === movieId);
  if (index > -1) {
    favMovies.splice(index, 1);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favMovies));
  }
}
