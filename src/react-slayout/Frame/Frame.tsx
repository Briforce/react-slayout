import { AnyAction, EntityState } from "@reduxjs/toolkit";
import { createContext, useContext } from "react";
import { getInitialTabNodeState, getTabNodeById } from "../reducers";
import { TabNode } from "../TabNode";
import { TabNodeProps } from "../types/TabNodeProps";
import "./Frame.css";

const LayoutContext = createContext(getInitialTabNodeState());
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
      <LayoutContext.Provider value={layout}>
        <TabNodeDispatchContext.Provider value={layoutDispatch}>
          <TabNode id="root-node" grow={100} />
        </TabNodeDispatchContext.Provider>
      </LayoutContext.Provider>
    </div>
  );
};

export default Frame;

export const useLayout = () => useContext(LayoutContext);
export const useTabNode = (id: string) => getTabNodeById(useLayout(), id);

export const useTabNodeDispatch = () => useContext(TabNodeDispatchContext);
