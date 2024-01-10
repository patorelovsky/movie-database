import { LinearProgress, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail, fetchMovieDetailApi } from "../api";

export default function MovieDetailPage() {
  const [movie, setMovie] = useState<MovieDetail>();
  const { id } = useParams();

  useEffect(() => {
    async function loadMovieDetail(movieId: string) {
      setMovie(await fetchMovieDetailApi(movieId));
    }
    if (id) {
      loadMovieDetail(id);
    }
  }, [id]);

  return movie ? (
    <Paper sx={{ m: 2, p: 2 }}>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt="" />
    </Paper>
  ) : (
    <LinearProgress />
  );
}
