import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { SearchMovie } from "../api";
import { useNavigate } from "react-router-dom";
import { MOVIE_DETAIL_PATH } from "../utils/constants";

export default function MovieSearchCard({
  imdbID,
  Title,
  Year,
  Poster,
}: SearchMovie) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${MOVIE_DETAIL_PATH}/${imdbID}`);
  };

  return (
    <Card
      component="a"
      onClick={handleClick}
      sx={{ height: 100, width: 400, display: "flex", cursor: "pointer" }}
    >
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
