import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { SearchMovie } from "../api";

export default function MovieCard({ Title, Year, Poster }: SearchMovie) {
  return (
    <Card sx={{ height: 100, width: 400, display: "flex" }}>
      <CardMedia
        component="img"
        image={Poster}
        sx={{ objectFit: "contain", flex: 1, height: 100, width: 70 }}
      />
      <CardContent
        sx={{
          ml: "auto",
          width: 300,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Tooltip title={Title}>
          <Typography noWrap variant="h6" fontSize={16}>
            {Title}
          </Typography>
        </Tooltip>
        <Typography color="text.secondary">{Year}</Typography>
      </CardContent>
    </Card>
  );
}
