import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";

const initialState = {
  first: null,
  firstPercentage: null,
  second: null,
  secondPercentage: null,
  split: null,
};

const nodeAdapter = createEntityAdapter<Node>();

export const nodeSlice = createSlice({
  name: "nodes",
  initialState: nodeAdapter.getInitialState(),
  reducers: {
    addNode: (state: any, action: any) => {
      const { parent, level, tabId } = action.payload;
      const newNode = {
        ...initialState,
        id: randomUUID(),
        parent,
        level,
        tabs: [tabId],
      };
      nodeAdapter.addOne(state, newNode);
    },
  },
});

export default nodeSlice.reducer;
