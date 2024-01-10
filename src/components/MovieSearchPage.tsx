import { Alert, AlertTitle, Box, Grid } from "@mui/material";
import { useAppSelector } from "../redux";
import MovieCard from "./MovieCard";
import MovieSearchBar from "./MovieSearchBar";

export default function MovieSearchPage() {
  const { error, data } = useAppSelector(({ movieSearch }) => movieSearch);

  return (
    <Box sx={{ m: 2 }}>
      <MovieSearchBar />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {data.movies.map((movie) => (
          <Grid item key={movie.imdbID}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error.name}</AlertTitle>
          {error.message}
        </Alert>
      )}
    </Box>
  );
}
