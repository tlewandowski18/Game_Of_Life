import React from 'react'
import { connect } from 'react-redux'
import { toggleIsRunning } from '../../actions'

function StartButton(props) {
    
    const clickButton = () => {
        props.toggleIsRunning()
    }
    
    return (
        <div className="control" onClick={clickButton}>Start</div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.isRunning
    }
}

export default connect(mapStateToProps, { toggleIsRunning })(StartButton)