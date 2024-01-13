import {
  addToFavoriteMovies,
  getFavoriteMovies,
  removeFromFavoriteMovies,
} from "./localStorageService";
import { SearchMovie } from ".";

describe("favoriteMoviesApi", () => {
  const testMovie: SearchMovie = {
    imdbID: "tt123456",
    Poster: "www.test.com/test.png",
    Title: "Test Movie",
    Year: "2024",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it("should return an empty array if localStorage is empty", () => {
    const result = getFavoriteMovies();
    expect(result).toEqual([]);
  });

  it("should add movie to favorite movies", () => {
    addToFavoriteMovies(testMovie);
    const expected = getFavoriteMovies();
    expect(expected).toEqual([testMovie]);
  });

  it("should remove a movie from localStorage", () => {
    addToFavoriteMovies(testMovie);
    removeFromFavoriteMovies(testMovie.imdbID);
    const storedMovies = getFavoriteMovies();
    expect(storedMovies).toEqual([]);
  });

  it("should handle non-existing movie ID", () => {
    addToFavoriteMovies(testMovie);
    removeFromFavoriteMovies("nonexistentId");
    const storedMovies = getFavoriteMovies();
    expect(storedMovies).toEqual([testMovie]);
  });
});
