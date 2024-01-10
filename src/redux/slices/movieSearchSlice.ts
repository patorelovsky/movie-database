import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MovieSearchSliceState = {
  searchTerm: string;
  page: number;
};

const initialState: MovieSearchSliceState = {
  searchTerm: "",
  page: 1,
};

const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    setSearchTerm(state, { payload }: PayloadAction<string>) {
      state.searchTerm = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
  },
});

export const { setSearchTerm, setPage } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
