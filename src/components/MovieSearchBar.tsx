import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { setSearchTerm, useAppDispatch } from "../redux";

type MovieSearchBarProps = {
  isLoading: boolean;
};

export default function MovieSearchBar({ isLoading }: MovieSearchBarProps) {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();
  const handleSearchClick = () => {
    dispatch(setSearchTerm(value));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      dispatch(setSearchTerm(value));
    }
  };

  return (
    <TextField
      sx={{ width: { xs: "100%", sm: 500 } }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
