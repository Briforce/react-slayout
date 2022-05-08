import { useTabNode, useTabNodeDispatch } from "../Frame";
import { addTabNode } from "../reducers";
import { SplitDirection } from "../types";
import "./TabNode.css";

interface TabNodeProps {
  id: string;
  grow: number;
}

const TabNode: React.FC<TabNodeProps> = ({ id, grow }) => {
  const tabNode = useTabNode(id);
  const dispatch = useTabNodeDispatch();

  const addColNode = () => {
    dispatch(addTabNode({ parent: id, split: SplitDirection.COLUMN }));
  };

  const addRowNode = () => {
    dispatch(addTabNode({ parent: id, split: SplitDirection.ROW }));
  };

  const _tabNode =
    tabNode?.first && tabNode?.second ? (
      <>
        <TabNode id={tabNode.first} grow={tabNode.firstPercentage as number} />
        <div style={{ border: "1px solid red" }} />
        <TabNode
          id={tabNode.second}
          grow={tabNode.secondPercentage as number}
        />
      </>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <button onClick={addColNode}>Add Col Tab Node</button>
        <button onClick={addRowNode}>Add Horz Tab Node</button>
      </div>
    );

  return (
    <div
      className="TabNode"
      style={{ flexGrow: grow, flexDirection: tabNode?.split }}
    >
      {_tabNode}
    </div>
  );
};

export default TabNode;
