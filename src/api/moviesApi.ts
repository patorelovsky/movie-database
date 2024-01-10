import axios from "axios";

const MOVIES_ENDPOINT = "http://www.omdbapi.com";

export type SearchMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type Response = {
  Response: "True" | "False";
  Search: SearchMovie[];
  totalResults: number;
  Error: string;
};

export async function fetchMoviesApi(searchTerm: string, page: number) {
  if (!searchTerm) {
    throw Error("Invalid search term.");
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
