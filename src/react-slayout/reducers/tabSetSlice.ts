import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [],
};

export const tabSetSlice = createSlice({
  name: "tabSets",
  initialState,
  reducers: {},
});

export default tabSetSlice.reducer;
