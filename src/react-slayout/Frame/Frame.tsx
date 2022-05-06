import { AnyAction, EntityState } from "@reduxjs/toolkit";
import { createContext, useContext } from "react";
import { TabNode } from "../TabNode";
import { TabNodeProps } from "../types/TabNodeProps";
import "./Frame.css";

const TabNodeDispatchContext = createContext<React.Dispatch<AnyAction>>(
  () => null
);

interface FrameProps {
  layout: EntityState<TabNodeProps>;
  layoutDispatch: React.Dispatch<AnyAction>;
}

const Frame: React.FC<FrameProps> = ({ layout, layoutDispatch }) => {
  return (
    <div className="Frame">
      <TabNodeDispatchContext.Provider value={layoutDispatch}>
        <TabNode id="root-node" />
      </TabNodeDispatchContext.Provider>
    </div>
  );
};

export default Frame;

export const useTabNodeDispatch = () => useContext(TabNodeDispatchContext);
