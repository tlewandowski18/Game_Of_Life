import React from 'react'

function StartButton(props) {
    

    console.log(props.isRunning)
    
    return (
        <div className={`control ${props.isRunning ? "isRunning" : ""}`} onClick={props.clickStart}>{props.isRunning ? "Stop!" : "Start"}</div>
    )
}


export default StartButton