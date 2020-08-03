import React from 'react'
import { connect } from 'react-redux'
import { flipGens, incrementIterations } from '../../../actions'
import algorithm from "../../../Algorithm"

function IncrementButton(props) {
    
    let cellsAlive = []
    const clickButton = () => {
        //Create list showing live and dead cells
        Object.keys(props.current_gen).forEach(key => {
            if (props.current_gen[key].isAlive) {
                cellsAlive.push(1)
            } else {
                cellsAlive.push(0)
            }
        }) 
        
        //check to see if all cells in list are dead
        const allCellsDead = cellsAlive.every(cell => cell === 0)
        if(!allCellsDead) {
            //if on first generation, increment to account for showing generation
            if (props.iterations === 0) {
                props.incrementIterations()
            }
            //run algorithm and increment generations with every click
            algorithm(props)
            props.incrementIterations()
        }
    }
    
    return (
        <div className="control" onClick={clickButton}>Increment</div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.running.isRunning,
        iterations: state.running.iterations,
        current_gen: state.generations.current_gen
    }
}

export default connect(mapStateToProps, {flipGens, incrementIterations})(IncrementButton)