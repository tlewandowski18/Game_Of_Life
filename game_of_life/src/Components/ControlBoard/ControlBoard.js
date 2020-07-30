import React from "react"

import StartButton from './StartButton'
import ClearButton from './ClearButton'
import RandomButton from './RandomButton'

const ControlBoard = (props) => {

    return (
        <div className="control-board">
            <StartButton clickStart={props.clickStart}></StartButton>
            <ClearButton></ClearButton>
            <RandomButton></RandomButton>
        </div>
    )
}

export default ControlBoard