import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addToFavoriteMovies as addToFavorites,
  getFavoriteMovies as getFavorites,
  removeFromFavoriteMovies as removeFromFavorites,
  SearchMovie,
} from "../../services";

const initialState: SearchMovie[] = [];

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    getFavoriteMovies() {
      return getFavorites();
    },
    addToFavoriteMovies(
      state,
      { payload: newMovie }: PayloadAction<SearchMovie>
    ) {
      const index = state.findIndex(
        (movie) => movie.imdbID === newMovie.imdbID
      );
      if (index === -1) {
        addToFavorites(newMovie);
        state.push(newMovie);
      }
    },
    removeFromFavoriteMovies(
      state,
      { payload: imdbID }: PayloadAction<string>
    ) {
      removeFromFavorites(imdbID);
      const index = state.findIndex((movie) => movie.imdbID === imdbID);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {
  getFavoriteMovies,
  addToFavoriteMovies,
  removeFromFavoriteMovies,
} = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
