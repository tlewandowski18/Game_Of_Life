import React from 'react'
import {connect} from 'react-redux'

function GenerationCounter(props) {
    return (
        <div className="GenerationCounter">
            <div className="Counter">Generations: {props.iterations}</div>
            <div className="EmptyDiv"></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        iterations: state.running.iterations
    }
}

export default connect(mapStateToProps, {})(GenerationCounter)