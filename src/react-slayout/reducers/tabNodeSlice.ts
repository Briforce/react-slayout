import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TabNodeProps } from "../types/TabNodeProps";

const tabNodeAdapter = createEntityAdapter<TabNodeProps>();

const getInitialState = () =>
  tabNodeAdapter.addOne(tabNodeAdapter.getInitialState(), {
    id: "root-node",
    tabs: [],
  });

export const tabNodeSlice = createSlice({
  name: "tabNodes",
  initialState: getInitialState(),
  reducers: {
    addTabNode: (state: any, action: any) => {
      const { parent, tabId } = action.payload;
      const newNode: TabNodeProps = {
        id: crypto.randomUUID(),
        parent,
        tabs: [tabId],
      };
      tabNodeAdapter.addOne(state, newNode);
    },
  },
});

export const { addTabNode } = tabNodeSlice.actions;

export default tabNodeSlice.reducer;

export const {
  selectIds: tabNodeIds,
  selectAll: allTabNodes,
  selectById: getTabNodeById,
} = tabNodeAdapter.getSelectors((state: any) => state.tabNodes);
