import React, {useState} from "react"
import { connect } from 'react-redux'

import { toggleCell } from '../../actions'

function Cell(props) {

    const [status, setStatus] = useState(false)
    
    const clickCell = () => {
        const obj = {
            key: props.position,
            value: !props.current_gen[props.position]
        }
        props.toggleCell(obj)
        setStatus(!status)
    }
    
    
    // const toggleStatus = (event) => {
    //     const cell = event.target
    //     if (cell.props.current_gen[cell.props.position] === "dead") {
    //         const obj = {
    //             key: cell.props.position,
    //             value: "alive"
    //         }
    //         cell.props.toggleCell(obj)
    //     } else {
    //         const obj = {
    //             key: cell.props.position,
    //             value: "dead"
    //         }
    //         cell.props.toggleCell(obj)
    //     }
    // }

    return (
        <div className={`cell ${status ? 'clicked' : ''}`} position={props.position} neighbors={props.neighbors} onClick={clickCell}>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.current_gen,
        next_gen: state.next_gen
    }
}

export default connect(mapStateToProps, { toggleCell })(Cell)
