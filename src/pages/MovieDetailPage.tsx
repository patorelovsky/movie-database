import { Alert, Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailMovie, fetchMovieDetailApi } from "../services";
import DetailMovieCard from "../components/MovieDetailCard";

export default function MovieDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<DetailMovie>();
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
      {movie && <DetailMovieCard {...movie} />}
    </Box>
  );
}
