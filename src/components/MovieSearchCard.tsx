import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchMovie } from "../services";
import FavoriteButton from "./FavoriteButton";
import styles from "./MovieSearchCard.module.scss";
import { MOVIE_DETAIL_PATH } from "../App";

export default function MovieSearchCard(movie: SearchMovie) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`${MOVIE_DETAIL_PATH}/${encodeURIComponent(movie.imdbID)}`);
  };

  return (
    <Card className={styles.movieSearchCard}>
      <CardMedia
        className={styles.poster}
        component="img"
        onClick={handleCardClick}
        image={movie.Poster}
      />
      <CardContent className={styles.content}>
        <Tooltip className={styles.title} title={movie.Title}>
          <Typography
            onClick={handleCardClick}
            noWrap
            variant="h6"
            fontSize={16}
          >
            {movie.Title}
          </Typography>
        </Tooltip>
        <Typography color="text.secondary">{movie.Year}</Typography>
      </CardContent>
      <FavoriteButton movie={movie} />
    </Card>
  );
}
