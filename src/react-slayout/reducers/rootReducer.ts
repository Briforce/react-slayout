import { combineReducers } from "@reduxjs/toolkit";
import tabNodeReducer from "./tabNodeSlice";
import tabReducer from "./tabSlice";

const layoutReducer = combineReducers({
  tabNodes: tabNodeReducer,
  tabs: tabReducer,
});

export default layoutReducer;
