import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { DetailMovie } from "../services";
import FavoriteButton from "./FavoriteButton";
import styles from "./MovieDetailCard.module.scss";

export default function MovieDetailCard(movie: DetailMovie) {
  return (
    <Card className={styles.movieDetailCard}>
      <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
        <CardMedia
          className={styles.poster}
          component="img"
          image={movie.Poster}
        />
        <CardContent className={styles.content}>
          <Stack className={styles.titleBar}>
            <Typography variant="h4">{movie.Title}</Typography>
            <FavoriteButton movie={movie} size="large" />
          </Stack>
          <Stack className={styles.chips}>
            <Tooltip title={`Released ${movie.Released}`}>
              <Chip variant="outlined" label={movie.Year} size="small" />
            </Tooltip>
            <Tooltip title="Rated">
              <Chip variant="outlined" label={movie.Rated} size="small" />
            </Tooltip>
          </Stack>
          <Divider className={styles.divider} />
          <LabelValueRow label="Director" value={movie.Director} />
          <LabelValueRow label="Writer" value={movie.Writer} />
          <LabelValueRow label="Actors" value={movie.Actors} />
          <LabelValueRow label="Language" value={movie.Language} />
          <LabelValueRow label="Country" value={movie.Country} />
          <LabelValueRow label="Awards" value={movie.Awards} />
          <Divider className={styles.divider}>Plot</Divider>
          <Typography>{movie.Plot}</Typography>
          <Stack className={styles.chips}>
            {movie.Genre.split(",").map((genre) => (
              <Chip key={genre} color="primary" label={genre} />
            ))}
          </Stack>
        </CardContent>
      </Stack>
      <Divider variant="middle" className={styles.divider}>
        Ratings
      </Divider>
      <CardContent className={styles.ratings}>
        <LabelValueRow
          label={`IMDb rating`}
          value={`${movie.imdbRating}/10 - ${movie.imdbVotes} votes`}
        />
        {movie.Ratings.map(({ Source, Value }) => (
          <Fragment key={Source}>
            <Divider flexItem orientation="vertical" />
            <LabelValueRow label={Source} value={Value} />
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
}

type LabelValueRowProps = {
  label: string;
  value: string;
};

function LabelValueRow({ label, value }: LabelValueRowProps) {
  return (
    <Stack className={styles.labelValueRow}>
      <Typography className={styles.labelValueRow__label}>{label}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
