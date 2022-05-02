import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TabNode } from "../types/TabNode";

const tabNodeAdapter = createEntityAdapter<TabNode>();

const getInitialState = () =>
  tabNodeAdapter.addOne(tabNodeAdapter.getInitialState(), {
    id: crypto.randomUUID(),
    tabs: [],
    level: 0,
  });

export const tabNodeSlice = createSlice({
  name: "tabNodes",
  initialState: getInitialState(),
  reducers: {
    addTabNode: (state: any, action: any) => {
      const { parent, level, tabId } = action.payload;
      const newNode: TabNode = {
        id: crypto.randomUUID(),
        parent,
        level,
        tabs: [tabId],
      };
      tabNodeAdapter.addOne(state, newNode);
    },
  },
});

export const { addTabNode } = tabNodeSlice.actions;

export default tabNodeSlice.reducer;

const { selectIds: tabNodeIds } = tabNodeAdapter.getSelectors(
  (state: any) => state.tabNodes
);

export const getLastNodeId = (state: any) => tabNodeIds(state).at(-1);
