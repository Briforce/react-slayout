import { useReducer } from "react";
import {
  addTab,
  Frame,
  layoutReducer,
  addTabNode,
  tabNodeIds,
} from "../react-slayout";
import "./App.css";

function App() {
  const [layout, dispatch] = useReducer(layoutReducer, {
    tabNodes: { entities: {}, ids: [] },
  } as any);

  const lastId = tabNodeIds(layout).at(-1);

  const addNewTab = () => {
    dispatch(addTab({ component: <>Hello</>, tabNodeId: lastId }));
  };

  const addNewTabNode = () => {
    dispatch(addTabNode({ parent: "" }));
  };
  console.log(layout);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addNewTabNode}>Add Tab Node</button>
        <button onClick={addNewTab}>Add Tab</button>
        <div className="FrameContainer">
          <Frame layout={layout} />
        </div>
      </header>
    </div>
  );
}

export default App;
