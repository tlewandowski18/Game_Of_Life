import React from 'react';
import './App.css';

import Canvas from "./Components/Canvas/Canvas"
import ControlBoard from "./Components/ControlBoard/ControlBoard"

function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
      <ControlBoard></ControlBoard>
    </div>
  );
}

export default App;
