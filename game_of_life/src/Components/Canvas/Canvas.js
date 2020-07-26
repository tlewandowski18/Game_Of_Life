import React, {useEffect} from "react"
import { connect } from 'react-redux'

import { setInitialState, toggleCell } from '../../actions'

import Cell from "./Cell"




const Canvas = props => {

    const clickCell = (position) => {
        props.toggleCell(position)
    }

    let cells = []
    Object.keys(props.current_gen).forEach(key => {
        cells.push(<Cell
            key={key}
            position={key}
            neighbors={props.current_gen[key].neighbors}
            isAlive={props.current_gen[key].isAlive}
            clickCell={clickCell}
        ></Cell>)
    }) 
    
    useEffect(() => {
        Object.keys(props.current_gen).forEach(key => {
            let count = 0
            let currentItem = props.current_gen[key]
            currentItem.neighbors.forEach(neighbor => {
                if (props.current_gen[neighbor].isAlive) {
                    count++
                }
            })
            if (currentItem.isAlive && count === 2) {
                return
            } else if (currentItem.isAlive && count === 3) {
                return
            } else if (!currentItem.isAlive && count === 3) {
                props.toggleCell(key)
            } else if (currentItem.isAlive && count < 2) {
                props.toggleCell(key)
            } else if (currentItem.isAlive && count > 3) {
                props.toggleCell(key)
            }
            else {
                return
            }
        })
        
    }, [props.isRunning])

    return (
        <div className="Canvas" >
            {cells}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.isRunning,
        current_gen: state.current_gen,
        next_gen: state.next_gen
    }
}

export default connect(mapStateToProps, { setInitialState, toggleCell })(Canvas)