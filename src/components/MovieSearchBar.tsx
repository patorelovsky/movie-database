import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
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

export default function MovieSearchBar() {
  const {
    isLoading,
    data: { searchTerm, page },
  } = useAppSelector(({ movieSearch }) => movieSearch);

  const dispatch = useAppDispatch();
  const handleSearchClick = () => {
    dispatch(fetchMovies({ searchTerm, page }));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      dispatch(fetchMovies({ searchTerm, page }));
    }
  };

  return (
    <TextField
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      onKeyDown={handleKeyDown}
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
  );
}
