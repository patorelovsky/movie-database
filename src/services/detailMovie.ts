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
