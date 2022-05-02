import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Tab } from "../types/Tab";
import { getLastNodeId } from "./tabNodeSlice";

const tabAdapter = createEntityAdapter<Tab>();

export const tabSlice = createSlice({
  name: "tabs",
  initialState: tabAdapter.getInitialState(),
  reducers: {
    addTab: (state, action) => {
      const { component, id } = action.payload;
      const tabNodeId = getLastNodeId(state);

      if (tabNodeId) {
        const newTab: Tab = {
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
