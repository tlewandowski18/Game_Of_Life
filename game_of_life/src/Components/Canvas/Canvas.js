import React, {useEffect} from "react"
import { connect } from 'react-redux'

import { toggleCell, flipGens, incrementIterations, resetIterations } from '../../actions'

import Cell from "./Cell"




const Canvas = props => {


    const clickCell = (position) => {
        props.toggleCell(position)
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
    console.log(allCellsDead)

    useEffect(() => {
        if (props.isRunning && !allCellsDead) {
            setTimeout(props.incrementIterations, 100);
        } 
    })
    
    useEffect(() => {
        

        const newObj = props.current_gen
        const changeList = []
        Object.keys(newObj).forEach(key => {
            let count = 0
            newObj[key].neighbors.forEach(neighbor => {
                if (newObj[neighbor].isAlive) {
                    count++
                }
            })
            if (newObj[key].isAlive && count === 2) {
                return
            } else if (newObj[key].isAlive && count === 3) {
                return
            } else if (!newObj[key].isAlive && count === 3) {
                changeList.push(key)
            } else if (newObj[key].isAlive && count < 2) {
                changeList.push(key)
            } else if (newObj[key].isAlive && count > 3) {
                changeList.push(key)
            }
            else {
                return
            }
        })
        changeList.forEach(key => {
            newObj[key].isAlive = !newObj[key].isAlive
        })
        props.flipGens(newObj)
    
        
    }, [props.iterations])

    return (
        <div className="Canvas" >
            {cells}
            <div>{props.iterations}</div>
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