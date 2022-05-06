import { EntityId } from "@reduxjs/toolkit";
import { useTabNodeDispatch } from "../Frame/Frame";
import { addTabNode } from "../reducers";

interface TabNodeProps {
  id: EntityId;
}

const TabNode: React.FC<TabNodeProps> = ({ id }) => {
  const dispatch = useTabNodeDispatch();

  const addNewTabNode = () => {
    dispatch(addTabNode({ id }));
  };
  return (
    <div>
      <button onClick={addNewTabNode}>Add Tab Node</button>
    </div>
  );
};

export default TabNode;
