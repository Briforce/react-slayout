import { combineReducers } from "@reduxjs/toolkit";
import groupReducer from "./groupSlice";
import tabSetReducer from "./tabSetSlice";

const layoutReducer = combineReducers({
  groups: groupReducer,
  tabSets: tabSetReducer,
});

export default layoutReducer;
