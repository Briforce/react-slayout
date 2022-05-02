import { useReducer } from "react";
import { addTab, Frame, layoutReducer, addTabNode } from "../react-slayout";
import "./App.css";

function App() {
  const [layoutState, dispatch] = useReducer(layoutReducer, {} as any);

  const addNewTab = () => {
    dispatch(addTab({ component: <>Hello</> }));
  };

  const addNewTabNode = () => {
    dispatch(addTabNode({ parent: "", level: 1 }));
  };
  console.log(layoutState);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addNewTabNode}>Add Tab Node</button>
        <button onClick={addNewTab}>Add Tab</button>
        <div className="FrameContainer">
          <Frame />
        </div>
      </header>
    </div>
  );
}

export default App;
