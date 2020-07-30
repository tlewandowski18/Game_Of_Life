import React from 'react'
import { connect } from 'react-redux'
import { clearCanvas, resetIterations } from '../../actions'

function ClearButton(props) {
    
    const clickButton = () => {
        props.clearCanvas()
        props.resetIterations()
    }
    
    return (
        <div className="control" onClick={clickButton}>Clear</div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.generations.current_gen,
    }
}

export default connect(mapStateToProps, { clearCanvas, resetIterations })(ClearButton)