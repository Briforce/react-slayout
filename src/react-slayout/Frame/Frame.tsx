import { getTabNodeById } from "../reducers";
import { TabNode } from "../TabNode";
import "./Frame.css";

const Frame = ({ layout }: any) => {
  const rootNode = getTabNodeById(layout, "root-node");

  return <div className="Frame">{!!rootNode && <TabNode {...rootNode} />}</div>;
};

export default Frame;
