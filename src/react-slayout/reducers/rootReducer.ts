import { combineReducers } from "@reduxjs/toolkit";
import nodeReducer from "./nodeSlice";
import tabSetReducer from "./tabSetSlice";
import tabReducer from "./tabSlice";

const layoutReducer = combineReducers({
  nodes: nodeReducer,
  tabSets: tabSetReducer,
  tabs: tabReducer,
});

export default layoutReducer;
