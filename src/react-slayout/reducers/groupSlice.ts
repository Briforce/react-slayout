import { createSlice } from "@reduxjs/toolkit";

interface Group {
  value: number;
}

const initialState: Group = {
  value: 0,
};

export const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
});

export default groupSlice.reducer;
