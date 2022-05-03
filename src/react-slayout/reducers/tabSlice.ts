import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TabProps } from "../types/TabProps";

const tabAdapter = createEntityAdapter<TabProps>();

export const tabSlice = createSlice({
  name: "tabs",
  initialState: tabAdapter.getInitialState(),
  reducers: {
    addTab: (state, action) => {
      const { component, id, tabNodeId } = action.payload;

      if (tabNodeId) {
        const newTab: TabProps = {
          id: id ? id : crypto.randomUUID(),
          component,
          tabNodeId,
        };

        tabAdapter.addOne(state, newTab);
      }
    },
  },
});

export const { addTab } = tabSlice.actions;

export default tabSlice.reducer;
