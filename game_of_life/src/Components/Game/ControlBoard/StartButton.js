import React from 'react'

function StartButton(props) {
    
    
    return (
        <div className={`control ${props.isRunning ? "isRunning" : ""}`} onClick={props.clickStart}>{props.isRunning ? "Stop!" : "Start"}</div>
    )
}


export default StartButton