import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies, Movie } from "../thunks/fetchMovies";

const initialState = {
  isLoading: false,
  data: {
    movies: [] as Movie[],
    searchTerm: "",
    page: 1,
  },
  error: undefined as string | undefined,
};

const movieSearchSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm(state, { payload }: PayloadAction<string>) {
      state.data.searchTerm = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.data.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state, { payload: { totalResults, movies } }) => {
        state.isLoading = false;
        state.error = undefined;
        state.data.movies = movies;
      }
    );
    builder.addCase(fetchMovies.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const { setSearchTerm } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
