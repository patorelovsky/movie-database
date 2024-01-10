import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesApi } from "../../api";

export type FetchMoviesArgs = {
  searchTerm: string;
  page: number;
};

export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async ({ searchTerm, page }: FetchMoviesArgs) => {
    if (!searchTerm) {
      return undefined;
    }
    return await fetchMoviesApi(searchTerm, page);
  }
);
