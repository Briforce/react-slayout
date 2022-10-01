import { useReducer } from "react";
import {
  Frame,
  tabNodeReducer,
  getInitialTabNodeState,
} from "../react-slayout";
import "./App.css";

function App() {
  const [layout, layoutDispatch] = useReducer(
    tabNodeReducer,
    getInitialTabNodeState()
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="FrameContainer">
          <Frame layout={layout} layoutDispatch={layoutDispatch} />
        </div>
      </header>
    </div>
  );
}

export default App;
