import Star from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton, Tooltip } from "@mui/material";
import {
  addToFavoriteMovies,
  removeFromFavoriteMovies,
  useAppDispatch,
  useAppSelector,
} from "../redux";
import { SearchMovie } from "../services";

type FavoriteButtonProps = {
  movie: SearchMovie;
};

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const favoriteMovies = useAppSelector(({ favoriteMovies }) => favoriteMovies);
  const isFavorite = (movie: SearchMovie) => {
    return favoriteMovies.find((favMovie) => favMovie.imdbID === movie.imdbID);
  };
  const dispatch = useAppDispatch();
  const handleFavoriteClick = (movie: SearchMovie) => {
    dispatch(addToFavoriteMovies(movie));
  };
  const handleUnfavoriteClick = (movie: SearchMovie) => {
    dispatch(removeFromFavoriteMovies(movie.imdbID));
  };

  return isFavorite(movie) ? (
    <Tooltip title="Remove from favorites">
      <IconButton onClick={() => handleUnfavoriteClick(movie)}>
        <Star />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="Add to favorites">
      <IconButton onClick={() => handleFavoriteClick(movie)}>
        <StarOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
