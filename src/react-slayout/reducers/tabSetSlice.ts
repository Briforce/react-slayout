import { createSlice } from "@reduxjs/toolkit";

interface TabSet {
  value: number;
}

const initialState: TabSet = {
  value: 0,
};

export const tabSetSlice = createSlice({
  name: "tabSets",
  initialState,
  reducers: {},
});

export default tabSetSlice.reducer;
