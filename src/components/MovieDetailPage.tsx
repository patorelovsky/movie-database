import { Alert, Box, LinearProgress, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail, fetchMovieDetailApi } from "../api";

export default function MovieDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetail>();
  const [error, setError] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchMovieDetailApi(id)
        .then((movie) => setMovie(movie))
        .catch((error: Error) => {
          console.error(error);
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <Box>
      {isLoading && <LinearProgress />}
      {error && (
        <Alert sx={{ m: 5 }} severity="error">
          {error}
        </Alert>
      )}
      {movie && (
        <Paper sx={{ m: 2, p: 2 }}>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt="" />
        </Paper>
      )}
    </Box>
  );
}
