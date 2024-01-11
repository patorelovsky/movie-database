import axios from "axios";

const MOVIES_ENDPOINT = "http://www.omdbapi.com";

type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetail = {
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
  Ratings: Rating;
  Released: string;
  Runtime: string;
  Title: string;
  Type: "movie" | "series" | "episode";
  Website: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
  Response: "True" | "False";
  Error: string;
};

export async function fetchMovieDetailApi(movieId: string) {
  if (!movieId) {
    throw Error("Invalid movie ID.");
  }

  const { data } = await axios.get<MovieDetail>(MOVIES_ENDPOINT, {
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