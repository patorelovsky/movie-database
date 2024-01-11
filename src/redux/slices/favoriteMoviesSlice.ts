import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addToFavoriteMovies as addToFavoriteMoviesApi,
  getFavoriteMovies as getFavoriteMoviesApi,
  removeFromFavoriteMovies as removeFromFavoriteMoviesApi,
  SearchMovie,
} from "../../api";

const initialState: SearchMovie[] = [];

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    getFavoriteMovies() {
      return getFavoriteMoviesApi();
    },
    addToFavoriteMovies(_state, { payload }: PayloadAction<SearchMovie>) {
      addToFavoriteMoviesApi(payload);
    },
    removeFromFavoriteMovies(state, { payload }: PayloadAction<SearchMovie>) {
      removeFromFavoriteMoviesApi(payload.imdbID);
    },
  },
});

const { getFavoriteMovies, addToFavoriteMovies, removeFromFavoriteMovies } =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
