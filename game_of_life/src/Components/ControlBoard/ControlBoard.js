import React from "react"

import StartButton from './StartButton'
import ClearButton from './ClearButton'

const ControlBoard = (props) => {

    return (
        <div className="control-board">
            <StartButton clickStart={props.clickStart}></StartButton>
            <ClearButton></ClearButton>
        </div>
    )
}

export default ControlBoard