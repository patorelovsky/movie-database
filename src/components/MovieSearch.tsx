import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  fetchMovies,
  setSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../redux";
import MovieCard from "./MovieCard";

export default function MovieSearch() {
  const dispatch = useAppDispatch();

  const { isLoading, error, data } = useAppSelector(
    ({ movieSearch }) => movieSearch
  );

  const handleSearchClick = () => {
    dispatch(fetchMovies({ searchTerm: data.searchTerm, page: data.page }));
  };

  return (
    <Box sx={{ m: 2 }}>
      <TextField
        value={data.searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
        variant="standard"
        disabled={isLoading}
        label="Search for movies..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isLoading ? (
                <CircularProgress size={20} />
              ) : (
                <IconButton edge="end" onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {data.movies.map((movie) => (
          <Grid item key={movie.imdbID}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error.name}</AlertTitle>
          {error.message}
        </Alert>
      )}
    </Box>
  );
}
