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
    next_gen: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_INITIAL_STATE" :
            return {
                ...state,
                current_gen: action.payload,
                next_gen: action.payload
            }
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
        default:
            return state
    }
}