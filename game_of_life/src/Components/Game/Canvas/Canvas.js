import React, {useEffect} from "react"
import { connect } from 'react-redux'

import { toggleCell, flipGens, incrementIterations, resetIterations } from '../../../actions'

import Cell from "./Cell"
import algorithm from "../../../Algorithm"

const Canvas = props => {

    const clickCell = (position) => {
        if (!props.isRunning) {
            props.toggleCell(position)
        }
    }
    
    let cells = []
    let cellsAlive = []

    Object.keys(props.current_gen).forEach(key => {
        cells.push(<Cell
            key={key}
            position={key}
            neighbors={props.current_gen[key].neighbors}
            isAlive={props.current_gen[key].isAlive}
            clickCell={clickCell}
        ></Cell>)
        if (props.current_gen[key].isAlive) {
            cellsAlive.push(1)
        } else {
            cellsAlive.push(0)
        }
    }) 

    const allCellsDead = cellsAlive.every(cell => cell === 0)

    useEffect(() => {
        if (props.isRunning && !allCellsDead) {
            setTimeout(props.incrementIterations, 50);
        } 
    })
    
    useEffect(() => {
        if (props.isRunning) {
            algorithm(props)
        }
    }, [props.iterations])


    return (
        <div className="Canvas" >
            {cells}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning,
        iterations: state.running.iterations,
        current_gen: state.generations.current_gen
    }
}

export default connect(mapStateToProps, { toggleCell, flipGens, incrementIterations, resetIterations })(Canvas)