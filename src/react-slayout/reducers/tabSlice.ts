import { createSlice } from "@reduxjs/toolkit";

interface Tab {
  value: number;
}

const initialState: Tab = {
  value: 0,
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {},
});

export default tabSlice.reducer;
