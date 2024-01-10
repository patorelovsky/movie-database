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
  Response: "True" | "False";
  Search: Movie[];
  totalResults: number;
  Error: string;
};

export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async ({ searchTerm, page }: FetchMoviesArgs) => {
    if (!searchTerm) {
      return { movies: [] };
    }

    const { data } = await axios.get<Response>(MOVIES_ENDPOINT, {
      params: {
        page,
        type: "movie",
        r: "json",
        s: searchTerm,
        apikey: process.env.REACT_APP_OMDB_API_KEY,
      },
    });

    if (data.Response === "False") {
      throw Error(data.Error);
    }

    return { totalResults: data.totalResults, movies: data.Search ?? [] };
  }
);
