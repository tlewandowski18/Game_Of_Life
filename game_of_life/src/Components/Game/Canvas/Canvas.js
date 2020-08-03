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
    //Create cell for every key in state
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
        //create list of live cells and dead cells
        if (props.current_gen[key].isAlive) {
            cellsAlive.push(1)
        } else {
            cellsAlive.push(0)
        }
    }) 

    const allCellsDead = cellsAlive.every(cell => cell === 0)

    useEffect(() => {
        // check to see that program is running and that cells are alive
        if (props.isRunning && !allCellsDead) {
            //delay increment function to avoid infinite loop 
            setTimeout(props.incrementIterations, props.speed);
        } 
    })
    
    //run algroithm as long as iterations keeps incrementing and program has not been stopped
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
        speed: state.running.speed,
        current_gen: state.generations.current_gen
    }
}

export default connect(mapStateToProps, { toggleCell, flipGens, incrementIterations, resetIterations })(Canvas)