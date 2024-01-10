import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Movie } from "../redux";

export default function MovieCard({ Title, Year, Poster }: Movie) {
  return (
    <Card sx={{ height: 100, display: "flex" }}>
      <CardMedia
        component="img"
        image={Poster}
        sx={{ objectFit: "contain", flex: 1 }}
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
