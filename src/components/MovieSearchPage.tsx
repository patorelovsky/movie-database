import {
  Alert,
  Box,
  Grid,
  LinearProgress,
  Pagination,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { fetchMovies, setPage, useAppDispatch, useAppSelector } from "../redux";
import SearchMovieCard from "./SearchMovieCard";
import MovieSearchBar from "./MovieSearchBar";

export default function MovieSearchPage() {
  const { error, data, isLoading } = useAppSelector(({ movies }) => movies);
  const { searchTerm, page } = useAppSelector(({ movieSearch }) => movieSearch);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ searchTerm, page }));
  }, [dispatch, searchTerm, page]);

  const handlePaginationChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
  };

  return (
    <Box>
      {isLoading && <LinearProgress />}
      <Stack
        alignItems="center"
        sx={{ m: 4, height: "100%", mt: isLoading ? "12px" : "16px" }}
      >
        <MovieSearchBar searchTerm={searchTerm} disabled={isLoading} />
        {data && (
          <Grid container spacing={2} sx={{ mt: 4, mb: 4 }}>
            {data.movies.map((movie) => (
              <Grid item key={movie.imdbID}>
                <SearchMovieCard {...movie} />
              </Grid>
            ))}
          </Grid>
        )}
        {data && (
          <Pagination
            size="large"
            showFirstButton
            showLastButton
            color="primary"
            count={data.pageCount}
            page={page}
            onChange={handlePaginationChange}
          />
        )}
        {error && (
          <Alert sx={{ m: 5 }} severity="error">
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
