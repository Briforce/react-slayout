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
      const { parent, split } = action.payload;
      const first: TabNodeProps = {
        id: crypto.randomUUID(),
        parent,
      };
      const second: TabNodeProps = {
        id: crypto.randomUUID(),
        parent,
      };
      tabNodeAdapter.updateOne(state, {
        id: parent,
        changes: {
          first: first.id,
          firstPercentage: 50,
          second: second.id,
          secondPercentage: 50,
          split,
        },
      });
      tabNodeAdapter.addMany(state, [first, second]);
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

export const { selectById: getTabNodeById } = tabNodeAdapter.getSelectors();
