import React, {useState} from 'react';
import { connect } from 'react-redux'
import { toggleIsRunning } from './actions'
import './App.css';

import Canvas from "./Components/Canvas/Canvas"
import ControlBoard from "./Components/ControlBoard/ControlBoard"

function App(props) {

  const [gameRunning, setGameRunning] = useState(false)

  const clickButton = () => {
    props.toggleIsRunning()
    setGameRunning(!gameRunning)
  }

  return (
    <div className="App">
      <Canvas on={gameRunning}></Canvas>
      <ControlBoard clickStart={clickButton}></ControlBoard>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isRunning: state.running.isRunning
  }
}

export default connect(mapStateToProps, { toggleIsRunning })(App);
