import { Alert, Box, LinearProgress, Pagination, Stack } from "@mui/material";
import { useEffect } from "react";
import { fetchMovies, setPage, useAppDispatch, useAppSelector } from "../redux";
import MovieSearchBar from "../components/MovieSearchBar";
import MovieSearchGrid from "../components/MovieSearchGrid";

export default function MovieSearchPage() {
  const { error, data, isLoading } = useAppSelector(({ movies }) => movies);
  const { searchTerm, page } = useAppSelector(({ movieSearch }) => movieSearch);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ searchTerm, page }));
  }, [dispatch, searchTerm, page]);

  const handlePaginationChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(setPage(value));
  };

  return (
    <Box>
      {isLoading && <LinearProgress />}
      <Stack
        alignItems="center"
        sx={{ mx: 2, height: "100%", mt: isLoading ? "12px" : "16px" }}
      >
        <MovieSearchBar searchTerm={searchTerm} disabled={isLoading} />
        {data && <MovieSearchGrid movies={data.movies} />}
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
