import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MOVIES_ENDPOINT = "http://www.omdbapi.com";

type FetchMoviesArgs = {
  searchTerm: string;
  page: number;
};

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type Response = {
  Response: boolean;
  Search: Movie[];
  totalResults: number;
};

export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async ({ searchTerm, page }: FetchMoviesArgs) => {
    const { data } = await axios.get<Response>(MOVIES_ENDPOINT, {
      params: {
        page,
        type: "movie",
        r: "json",
        s: searchTerm,
        apikey: process.env.REACT_APP_OMDB_API_KEY,
      },
    });

    // TODO: Error handling
    return data.Search ?? [];
  }
);
