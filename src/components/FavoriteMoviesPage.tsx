import { Alert, Box } from "@mui/material";
import MovieSearchGrid from "./MovieSearchGrid";
import { getFavoriteMovies, useAppDispatch, useAppSelector } from "../redux";
import { useEffect } from "react";

export default function FavoriteMoviesPage() {
  const favMovies = useAppSelector(({ favoriteMovies }) => favoriteMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFavoriteMovies());
  }, [dispatch]);

  return (
    <Box sx={{ m: 2 }}>
      {favMovies.length > 0 ? (
        <MovieSearchGrid movies={favMovies} />
      ) : (
        <Alert severity="info">
          No favorite movies yet. Add some to your favorites!
        </Alert>
      )}
    </Box>
  );
}
