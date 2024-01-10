import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, Movie } from "../thunks/fetchMovies";

const PAGE_SIZE = 10;

type MoviesSliceState = {
  isLoading: boolean;
  data?: {
    movies: Movie[];
    pageCount?: number;
  };
  error?: string;
};

const initialState: MoviesSliceState = {
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = payload && {
        movies: payload.movies,
        pageCount: Math.ceil(payload.totalResults / PAGE_SIZE),
      };
    });
    builder.addCase(fetchMovies.rejected, (state, { error }) => {
      state.isLoading = false;
      state.data = undefined;
      state.error = error.message;
    });
  },
});

export default moviesSlice.reducer;
