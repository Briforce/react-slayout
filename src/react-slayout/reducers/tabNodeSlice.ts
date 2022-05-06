import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TabNodeProps } from "../types/TabNodeProps";

const tabNodeAdapter = createEntityAdapter<TabNodeProps>();

export const getInitialTabNodeState = () =>
  tabNodeAdapter.addOne(tabNodeAdapter.getInitialState(), { id: "root-node" });

const tabNodeSlice = createSlice({
  name: "tabNodes",
  initialState: getInitialTabNodeState(),
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
    addTab: (state: any, action: any) => {
      const { id, tabId } = action.payload;

      const tabNode = state.entities[id];
      if (tabNode) {
        tabNode.tabs.push(tabId);
      }
    },
  },
});

export const { addTabNode, addTab } = tabNodeSlice.actions;

export const tabNodeReducer = tabNodeSlice.reducer;

export const {
  selectIds: tabNodeIds,
  selectAll: allTabNodes,
  selectById: getTabNodeById,
} = tabNodeAdapter.getSelectors((state: any) => state.tabNodes);
