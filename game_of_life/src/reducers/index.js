const obj = {}
for (let i=0; i < 50; i++) {
    for (let j=0; j< 50; j++) {
            let neighbors
            const key = `${i},${j}`
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
                neighbors = [`${i},${columnLeft}`, `${rowAbove},${columnLeft}`, `${rowAbove},${j}`]
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
            obj[key] = {
                isAlive: false,
                neighbors: neighbors
            }
    }
}

const initialState = {
    isRunning: false,
    current_gen: obj, 
    next_gen: obj
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_ITEM" :
            const cellKey = action.payload
            return {
                    ...state,
                    current_gen: {
                        ...state.current_gen,
                        [cellKey]: {
                            ...state.current_gen[cellKey],
                            isAlive: !state.current_gen[cellKey].isAlive
                        }
                    }
                }
        case "TOGGLE_IS_RUNNING" :
            return {
                ...state,
                isRunning: !state.isRunning
            }
        case "CLEAR_CANVAS" :
            const newObj = {}
            Object.keys(state.current_gen).forEach(key => {
                newObj[key] = {
                    ...state.current_gen[key],
                    isAlive: false
                } 
            })
            return {
                ...state,
                current_gen: newObj
            }
        case "FLIP_GENS" :
            const saved_obj = state.current_gen
            return {
                ...state,
                next_gen: saved_obj,
                current_gen: action.payload
            }
        default:
            return state
    }
}