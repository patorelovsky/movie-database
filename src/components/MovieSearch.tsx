import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function MovieSearch() {
  const handleSearchClick = () => {
    // TODO: Implement search
  };

  return (
    <Box sx={{ m: 2 }}>
      <TextField
        variant="standard"
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
    </Box>
  );
}
