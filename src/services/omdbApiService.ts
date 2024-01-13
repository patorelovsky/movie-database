import axios from "axios";
import { DetailMovie, SearchMovie } from ".";

const MOVIES_ENDPOINT = "http://www.omdbapi.com";

type SearchResponse = {
  Response: "True" | "False";
  Search: SearchMovie[];
  totalResults: number;
  Error: string;
};

export async function fetchMoviesApi(searchTerm: string, page: number) {
  if (!searchTerm) {
    throw Error("Invalid search term.");
  }

  const { data } = await axios.get<SearchResponse>(MOVIES_ENDPOINT, {
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

type DetailResponse = DetailMovie & {
  Response: "True" | "False";
  Error: string;
};

export async function fetchMovieDetailApi(movieId: string) {
  if (!movieId) {
    throw Error("Invalid movie ID.");
  }

  const { data } = await axios.get<DetailResponse>(MOVIES_ENDPOINT, {
    params: {
      i: movieId,
      r: "json",
      apikey: process.env.REACT_APP_OMDB_API_KEY,
    },
  });

  if (data.Response === "False") {
    throw Error(data.Error);
  }

  return data;
}
