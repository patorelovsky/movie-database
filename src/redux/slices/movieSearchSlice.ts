import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MovieSearchSliceState = {
  searchTerm: string;
  page: number;
};

const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState: {
    searchTerm: "",
    page: 1,
  } as MovieSearchSliceState,
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
