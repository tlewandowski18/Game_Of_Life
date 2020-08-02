import React from 'react'
import { connect } from 'react-redux'
import { toggleIsRunning } from '../../actions'

import Canvas from "./Canvas/Canvas"
import ControlBoard from "./ControlBoard/ControlBoard"

function GameBoard(props) {

    return (
        <div className="GameBoard">
            <Canvas></Canvas>
            <ControlBoard></ControlBoard>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isRunning: state.running.isRunning
    }
}

export default connect(mapStateToProps, {toggleIsRunning})(GameBoard)