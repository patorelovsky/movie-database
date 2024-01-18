import Star from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Alert, IconButton, Snackbar, Tooltip } from "@mui/material";
import {
  addToFavoriteMovies,
  getFavoriteMovies,
  removeFromFavoriteMovies,
  useAppDispatch,
  useAppSelector,
} from "../redux";
import { SearchMovie } from "../services";
import { Fragment, useEffect, useState } from "react";

type FavoriteButtonProps = {
  movie: SearchMovie;
  size?: "small" | "large" | "medium";
};

export default function FavoriteButton({ movie, size }: FavoriteButtonProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason !== "clickaway") {
      setSnackbarOpen(false);
    }
  };
  const favoriteMovies = useAppSelector(({ favoriteMovies }) => favoriteMovies);
  const isFavorite = favoriteMovies.find(
    (favMovie) => favMovie.imdbID === movie.imdbID,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFavoriteMovies());
  }, [dispatch]);
  const handleFavoriteClick = (movieToFav: SearchMovie) => {
    dispatch(addToFavoriteMovies(movieToFav));
    setSnackbarOpen(true);
  };
  const handleUnfavoriteClick = ({ imdbID }: SearchMovie) => {
    dispatch(removeFromFavoriteMovies(imdbID));
    setSnackbarOpen(true);
  };

  return (
    <Fragment>
      <Tooltip
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <IconButton
          size={size}
          onClick={() =>
            isFavorite
              ? handleUnfavoriteClick(movie)
              : handleFavoriteClick(movie)
          }
        >
          {isFavorite ? (
            <Star fontSize={size} />
          ) : (
            <StarOutlineIcon fontSize={size} />
          )}
        </IconButton>
      </Tooltip>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={800}
        onClose={handleSnackbarClose}
      >
        <Alert security="success" onClose={handleSnackbarClose}>
          {isFavorite
            ? "Movie added  to favorites!"
            : "Movie removed from favorites!"}
        </Alert>
      </Snackbar>
    </Fragment>
  );
}
