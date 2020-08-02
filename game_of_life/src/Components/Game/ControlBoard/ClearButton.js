import React from 'react'
import { connect } from 'react-redux'
import { clearCanvas, resetIterations} from '../../../actions'

function ClearButton(props) {
    
    const clickButton = () => {
        if (props.isRunning) {
            alert("Cannot clear while game is running!") 
        } else {
            props.clearCanvas()
            props.resetIterations()
        }
    }
    
    return (
        <div className="control" onClick={clickButton}>Clear</div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning,
    }
}

export default connect(mapStateToProps, { clearCanvas, resetIterations})(ClearButton)