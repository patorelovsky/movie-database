import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { setSearchTerm, useAppDispatch } from "../redux";

type MovieSearchBarProps = {
  disabled: boolean;
};

export default function MovieSearchBar({ disabled }: MovieSearchBarProps) {
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
      disabled={disabled}
      label="Search for movies..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
