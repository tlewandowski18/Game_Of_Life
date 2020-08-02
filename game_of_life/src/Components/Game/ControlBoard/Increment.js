import React from 'react'
import { connect } from 'react-redux'
import { flipGens, incrementIterations } from '../../../actions'
import algorithm from "../../../Algorithm"

function IncrementButton(props) {
    
    let cellsAlive = []
    const clickButton = () => {
        
        Object.keys(props.current_gen).forEach(key => {
            if (props.current_gen[key].isAlive) {
                cellsAlive.push(1)
            } else {
                cellsAlive.push(0)
            }
        }) 
    
        const allCellsDead = cellsAlive.every(cell => cell === 0)
        if(!allCellsDead) {
            if (props.iterations === 0) {
                props.incrementIterations()
            }
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