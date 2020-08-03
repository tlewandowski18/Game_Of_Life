import React, {useState} from 'react'
import { connect } from 'react-redux'
import { changeSpeed } from '../../../actions'

function SpeedSelector(props) {
    
    const [speed, setSpeed] = useState("medium")
    const onSelect = e => {
        //check if game is running. if so, send alert
        if (props.isRunning){
            alert("Cannot change speed while game is running!")
            return
        }
        //set local state to target value
        setSpeed(e.target.value)
        //set speed in global state
        if (e.target.value === "slow") {
            props.changeSpeed(1000)
        } else if (e.target.value === "medium") {
            props.changeSpeed(300)
        } else {
            props.changeSpeed(50)
        }
    }
    
    return (
        <select className="control dropdown" value={speed} onChange={onSelect}>
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
        </select>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning,
    }
}

export default connect(mapStateToProps, {changeSpeed})(SpeedSelector)