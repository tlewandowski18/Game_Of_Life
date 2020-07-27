import React from 'react'
import { connect } from 'react-redux'
import { clearCanvas } from '../../actions'

function ClearButton(props) {
    
    const clickButton = () => {
        props.clearCanvas()
    }
    
    return (
        <div className="control" onClick={clickButton}>Clear</div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.current_gen
    }
}

export default connect(mapStateToProps, { clearCanvas })(ClearButton)