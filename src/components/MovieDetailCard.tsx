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
    <Card sx={{ m: 2, maxWidth: 1400 }}>
      <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
        <CardMedia
          component="img"
          image={movie.Poster}
          sx={{ objectFit: "contain", maxWidth: 300, m: "auto" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Stack direction="row" alignItems="center">
            <Typography mr="auto" variant="h4">
              {movie.Title}
            </Typography>
            <FavoriteButton movie={movie} size="large" />
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
          <LabelValueRow width={80} label="Director" value={movie.Director} />
          <LabelValueRow width={80} label="Writer" value={movie.Writer} />
          <LabelValueRow width={80} label="Actors" value={movie.Actors} />
          <LabelValueRow width={80} label="Language" value={movie.Language} />
          <LabelValueRow width={80} label="Country" value={movie.Country} />
          <LabelValueRow width={80} label="Awards" value={movie.Awards} />
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
  width?: number;
};

function LabelValueRow({
  label,
  value,
  direction = "row",
  width,
}: LabelValueRowProps) {
  return (
    <Stack direction={direction} alignItems="center">
      <Typography
        flexBasis={width}
        flexShrink={0}
        fontWeight={500}
        width={width}
      >
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
