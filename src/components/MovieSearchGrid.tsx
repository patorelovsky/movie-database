import { Grid } from "@mui/material";
import MovieSearchCard from "./MovieSearchCard";
import { SearchMovie } from "../services";
import styles from "./MovieSearchGrid.module.scss";

type MovieSearchGridProps = {
  movies: SearchMovie[];
};

export default function MovieSearchGrid({ movies }: MovieSearchGridProps) {
  return (
    <Grid className={styles.movieSearchGrid}>
      {movies.map((movie) => (
        <MovieSearchCard key={movie.imdbID} {...movie} />
      ))}
    </Grid>
  );
}
