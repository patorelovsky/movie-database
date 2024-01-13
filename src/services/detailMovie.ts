import { SearchMovie } from "./searchMovie";

type MovieRating = {
  Source: string;
  Value: string;
};

export type DetailMovie = SearchMovie & {
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
  Production: string;
  Rated: string;
  Ratings: MovieRating[];
  Released: string;
  Runtime: string;
  Type: "movie" | "series" | "episode";
  Website: string;
  Writer: string;
  imdbRating: string;
  imdbVotes: string;
};
