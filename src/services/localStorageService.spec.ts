import {
  addToFavoriteMovies,
  getFavoriteMovies,
  removeFromFavoriteMovies,
} from "./localStorageService";
import { SearchMovie } from ".";

describe("favoriteMoviesApi", () => {
  const testMovie1: SearchMovie = {
    imdbID: "tt123456",
    Poster: "www.test.com/test.png",
    Title: "Test Movie",
    Year: "2024",
  };
  const testMovie2: SearchMovie = {
    imdbID: "tt789012",
    Poster: "www.test.com/test.png",
    Title: "Test Movie 2",
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
    addToFavoriteMovies(testMovie1);
    const expected = getFavoriteMovies();
    expect(expected).toEqual([testMovie1]);
  });

  it("should not add duplicate movie to favorite movies", () => {
    addToFavoriteMovies(testMovie1);
    // Adding the same movie again
    addToFavoriteMovies(testMovie1);
    const expected = getFavoriteMovies();
    expect(expected).toEqual([testMovie1]);
  });

  it("should add a new movie alongside existing ones to favorite movies", () => {
    addToFavoriteMovies(testMovie1);
    addToFavoriteMovies(testMovie2);
    const expected = getFavoriteMovies();
    expect(expected).toEqual([testMovie1, testMovie2]);
  });

  it("should remove a movie from localStorage", () => {
    addToFavoriteMovies(testMovie1);
    removeFromFavoriteMovies(testMovie1.imdbID);
    const storedMovies = getFavoriteMovies();
    expect(storedMovies).toEqual([]);
  });

  it("should handle non-existing movie ID", () => {
    addToFavoriteMovies(testMovie1);
    removeFromFavoriteMovies("nonexistentId");
    const storedMovies = getFavoriteMovies();
    expect(storedMovies).toEqual([testMovie1]);
  });
});
