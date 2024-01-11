import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import movieSearchSlice from "./slices/movieSearchSlice";
import favoriteMoviesSlice from "./slices/favoriteMoviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieSearch: movieSearchSlice,
    favoriteMovies: favoriteMoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
