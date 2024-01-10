import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, Movie } from "../thunks/fetchMovies";

const PAGE_SIZE = 10;

type MoviesSliceState = {
  searchTerm: string;
  page: number;
  isLoading: boolean;
  data?: {
    movies: Movie[];
    pageCount?: number;
  };
  error?: string;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    page: 1,
    searchTerm: "",
  } as MoviesSliceState,
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
        pageCount: payload.totalResults / PAGE_SIZE,
      };
    });
    builder.addCase(fetchMovies.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default moviesSlice.reducer;
