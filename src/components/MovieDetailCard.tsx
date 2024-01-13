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

export default function MovieDetailCard(movie: DetailMovie) {
  return (
    <Card sx={{ m: 2 }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          image={movie.Poster}
          sx={{ objectFit: "contain", maxWidth: 300 }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Stack direction="row" alignItems="center">
            <Typography mr="auto" variant="h4">
              {movie.Title}
            </Typography>
            <FavoriteButton movie={movie} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Tooltip title={`Released ${movie.Released}`}>
              <Chip variant="outlined" label={movie.Year} size="small" />
            </Tooltip>
            <Tooltip title="Rated">
              <Chip variant="outlined" label={movie.Rated} size="small" />
            </Tooltip>
          </Stack>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <LabelValueRow
            label="Director"
            value={movie.Director}
            direction="row"
          />
          <LabelValueRow label="Writer" value={movie.Writer} direction="row" />
          <LabelValueRow label="Actors" value={movie.Actors} direction="row" />
          <LabelValueRow
            label="Language"
            value={movie.Language}
            direction="row"
          />
          <LabelValueRow
            label="Country"
            value={movie.Country}
            direction="row"
          />
          <LabelValueRow label="Awards" value={movie.Awards} direction="row" />
          <Divider sx={{ fontWeight: 500 }}>Plot</Divider>
          <Typography>{movie.Plot}</Typography>
          <Stack direction="row" spacing={1} mt="auto" ml="auto">
            {movie.Genre.split(",").map((genre) => (
              <Chip key={genre} color="primary" label={genre} />
            ))}
          </Stack>
        </CardContent>
      </Stack>
      <Divider variant="middle" sx={{ fontWeight: 500 }}>
        Ratings
      </Divider>
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="space-around">
          <LabelValueRow
            label={`IMDb rating`}
            value={`${movie.imdbRating}/10 - ${movie.imdbVotes} votes`}
            direction="column"
          />
          {movie.Ratings.map(({ Source, Value }) => (
            <Fragment key={Source}>
              <Divider flexItem orientation="vertical" />
              <LabelValueRow label={Source} value={Value} direction="column" />
            </Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

type LabelValueRowProps = {
  label: string;
  value: string;
  direction?: "row" | "column";
};

function LabelValueRow({ label, value, direction }: LabelValueRowProps) {
  return (
    <Stack direction={direction} alignItems="center">
      <Typography mr={2} fontWeight={500}>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
