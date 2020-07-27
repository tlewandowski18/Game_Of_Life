import React, {useEffect} from "react"
import { connect } from 'react-redux'

import { toggleCell, flipGens } from '../../actions'

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
        if (props.on) {

            const newObj = props.current_gen
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
                    newObj[key].isAlive = true
                } else if (newObj[key].isAlive && count < 2) {
                    newObj[key].isAlive = false
                } else if (newObj[key].isAlive && count > 3) {
                    newObj[key].isAlive = false
                }
                else {
                    return
                }
            })
            props.flipGens(newObj)
        }
        
    }, [props.on])

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

export default connect(mapStateToProps, { toggleCell, flipGens })(Canvas)