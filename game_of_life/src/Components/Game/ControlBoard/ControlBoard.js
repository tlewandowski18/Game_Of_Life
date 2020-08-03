import React from "react"
import {connect} from "react-redux"

import {toggleIsRunning} from "../../../actions"


import StartButton from './StartButton'
import ClearButton from './ClearButton'
import RandomButton from './RandomButton'
import IncrementButton from './Increment'
import SpeedSelector from './SpeedSelector'

const ControlBoard = (props) => {
    const clickButton = () => {
        props.toggleIsRunning()
    }

    return (
        <div className="control-board">
            <StartButton isRunning={props.isRunning} clickStart={clickButton}></StartButton>
            <ClearButton></ClearButton>
            <RandomButton></RandomButton>
            <IncrementButton></IncrementButton>
            <SpeedSelector></SpeedSelector>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning
    }
}

export default connect(mapStateToProps, {toggleIsRunning})(ControlBoard)