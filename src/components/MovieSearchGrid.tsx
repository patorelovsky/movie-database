import { Grid } from "@mui/material";
import MovieSearchCard from "./MovieSearchCard";
import { SearchMovie } from "../services";

type MovieSearchGridProps = {
  movies: SearchMovie[];
};

export default function MovieSearchGrid({ movies }: MovieSearchGridProps) {
  return (
    <Grid container spacing={2} sx={{ mt: 4, mb: 4 }}>
      {movies.map((movie) => (
        <Grid item key={movie.imdbID}>
          <MovieSearchCard {...movie} />
        </Grid>
      ))}
    </Grid>
  );
}
