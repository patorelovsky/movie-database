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
    addToFavoriteMovies(_state, { payload }: PayloadAction<SearchMovie>) {
      addToFavorites(payload);
    },
    removeFromFavoriteMovies(state, { payload }: PayloadAction<SearchMovie>) {
      removeFromFavorites(payload.imdbID);
    },
  },
});

const { getFavoriteMovies, addToFavoriteMovies, removeFromFavoriteMovies } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
