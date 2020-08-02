import React from 'react'
import { connect } from 'react-redux'
import { randomize, resetIterations } from '../../../actions'

function RandomButton(props) {
    
    const clickButton = () => {
        
        if (!props.isRunning) {
            props.randomize()
            props.resetIterations()
        } else {
            alert("Cannot set to random while game is running!")
        }
    }
    
    return (
        <div className="control" onClick={clickButton}>Random</div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning
    }
}

export default connect(mapStateToProps, { randomize, resetIterations })(RandomButton)