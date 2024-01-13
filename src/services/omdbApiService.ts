import axios from "axios";

const MOVIES_ENDPOINT = "http://www.omdbapi.com";

export type SearchMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

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

type MovieRating = {
  Source: string;
  Value: string;
};

export type DetailMovie = {
  imdbID: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: MovieRating[];
  Released: string;
  Runtime: string;
  Title: string;
  Type: "movie" | "series" | "episode";
  Website: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
};

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
