import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  fetchMovies,
  setSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../redux";

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
        label="Search for movies..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <IconButton edge="end" onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Box>
        {data.movies.map((movie) => (
          <p key={movie.imdbID}>{movie.Title}</p>
        ))}
      </Box>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error.name}</AlertTitle>
          {error.message}
        </Alert>
      )}
    </Box>
  );
}
