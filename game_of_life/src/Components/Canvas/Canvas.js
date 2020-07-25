import React, { useEffect } from "react"
import { connect } from 'react-redux'

import { setInitialState } from '../../actions'

import Cell from "./Cell"




const Canvas = props => {

    

    let cells = []
        for (let i=0; i < 50; i++) {
            for (let j=0; j< 50; j++) {
                    let neighbors
                    const rowAbove = i - 1;
                    const rowBelow = i + 1;
                    const columnLeft = j - 1;
                    const columnRight = j + 1;
                    if (rowAbove < 0 && columnLeft < 0) {
                        neighbors = [`${i},${columnRight}`, `${rowBelow},${j}`, `${rowBelow},${columnRight}`]
                    } else if (rowAbove < 0 && columnRight > 49) {
                        neighbors = [`${i},${columnLeft}`, `${rowBelow},${columnLeft}`, `${rowBelow},${j}`]
                    } else if (rowBelow > 49 && columnLeft < 0) {
                        neighbors = [`${rowAbove},${j}`, `${rowAbove},${columnRight}`, `${i},${columnRight}`]
                    } else if (rowBelow > 49 && columnRight > 49) {
                        neighbors = [`${i},${columnLeft}`, `${rowAbove},${columnLeft}`, `${rowAbove,j}`]
                    } else if (rowAbove < 0) {
                        neighbors = [`${i},${columnLeft}`, `${rowBelow},${columnLeft}`, `${rowBelow},${j}`, `${rowBelow},${columnRight}`, `${i},${columnRight}`]
                    } else if (columnRight > 49) {
                        neighbors = [`${rowAbove},${j}`, `${rowAbove},${columnLeft}`, `${i},${columnLeft}`, `${rowBelow},${columnLeft}`, `${rowBelow},${j}`] 
                    } else if (rowBelow > 49) {
                        neighbors = [`${i},${columnLeft}`, `${rowAbove},${columnLeft}`, `${rowAbove},${j}`, `${rowAbove},${columnRight}`, `${i},${columnRight}`]
                    } else if (columnLeft < 0) {
                        neighbors = [`${rowAbove},${j}`, `${rowAbove},${columnRight}`, `${i},${columnRight}`, `${rowBelow},${columnRight}`, `${rowBelow},${j}`]
                    } else {
                        neighbors = [`${rowAbove},${columnLeft}`, `${rowAbove},${j}`, `${rowAbove},${columnRight}`, `${i},${columnRight}`, `${rowBelow},${columnRight}`, `${rowBelow},${j}`, `${rowBelow},${columnLeft}`, `${i},${columnLeft}`]
                    }
                cells.push(<Cell 
                    position={`${i},${j}`}
                    neighbors={neighbors}
                ></Cell>)
            }
        }  
    useEffect(() => {
        const obj = {}
        cells.forEach(cell => {
            obj[cell.props.position] = false
        })
        props.setInitialState(obj)
    }, [])
    
    return (
        <div className="Canvas" >
            {cells}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.current_gen,
        next_gen: state.next_gen
    }
}

export default connect(mapStateToProps, { setInitialState })(Canvas)