import React from "react"
import { connect } from 'react-redux'

import { toggleCell } from '../../../actions'

function Cell(props) {


    return (
        <div className={`cell ${props.isAlive ? "clicked" : ""}`} onClick={() => {props.clickCell(props.position)}}>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.generations.current_gen,
        next_gen: state.generations.next_gen
    }
}

export default connect(mapStateToProps, { toggleCell })(Cell)
