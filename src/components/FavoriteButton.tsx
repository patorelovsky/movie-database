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
  size?: "small" | "large" | "medium";
};

export default function FavoriteButton({ movie, size }: FavoriteButtonProps) {
  const favoriteMovies = useAppSelector(({ favoriteMovies }) => favoriteMovies);
  const isFavorite = ({ imdbID }: SearchMovie) => {
    return favoriteMovies.find((favMovie) => favMovie.imdbID === imdbID);
  };
  const dispatch = useAppDispatch();
  const handleFavoriteClick = (movieToFav: SearchMovie) => {
    dispatch(addToFavoriteMovies(movieToFav));
  };
  const handleUnfavoriteClick = ({ imdbID }: SearchMovie) => {
    dispatch(removeFromFavoriteMovies(imdbID));
  };

  return isFavorite(movie) ? (
    <Tooltip title="Remove from favorites">
      <IconButton onClick={() => handleUnfavoriteClick(movie)} size={size}>
        <Star fontSize={size} />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="Add to favorites">
      <IconButton onClick={() => handleFavoriteClick(movie)} size={size}>
        <Star fontSize={size} />
      </IconButton>
    </Tooltip>
  );
}
