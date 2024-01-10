import { Alert, Box, Grid, Pagination } from "@mui/material";
import { useAppSelector } from "../redux";
import MovieCard from "./MovieCard";
import MovieSearchBar from "./MovieSearchBar";

export default function MovieSearchPage() {
  const { error, data, isLoading } = useAppSelector(({ movies }) => movies);

  return (
    <Box sx={{ m: 2 }}>
      <MovieSearchBar isLoading={isLoading} />
      {data && (
        <Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {data.movies.map((movie) => (
              <Grid item key={movie.imdbID}>
                <MovieCard {...movie} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}
