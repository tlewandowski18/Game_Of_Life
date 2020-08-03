//initialize state with key serving as cell position and denoting each cell's neighbors and setting each cell at 'dead'
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
    current_gen: obj
}

export default function generationsReducer(state = initialState, action) {
    switch(action.type) {
        //action: change cell to alive
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
        //action: clear canvas
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
        //action: substitute current gen with next generation found through algorithm
        case "FLIP_GENS" :
            return {
                ...state,
                current_gen: action.payload
            }
        //action: create grid assigning random value to each cell's "isAlive" key.
        case "RANDOMIZE" : 
            const randomObj = {}
            Object.keys(state.current_gen).forEach(key => {
                const randomNum = Math.floor(Math.random() * 10)
                randomObj[key] = {
                    ...state.current_gen[key],
                    isAlive: randomNum < 5 ? false : true
                } 
            })
            
            return {
                ...state,
                current_gen: randomObj
            }
        
        default:
            return state
    }
}