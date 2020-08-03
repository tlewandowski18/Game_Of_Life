
const initialState = {
    isRunning: false,
    iterations: 0,
    speed: 300
}

export default function runningReducer(state = initialState, action) {
    switch(action.type) {
        //action: increment the iteration
        case "INCREMENT_ITERATIONS" :
            return {
                ...state,
                iterations: state.iterations + 1
            }
        //action: reset iterations to 0
        case "RESET_ITERATIONS" : 
            return {
                ...state,
                iterations: 0
            }
        //action: turn program on/off
        case "TOGGLE_IS_RUNNING" :
            return {
                ...state,
                isRunning: !state.isRunning
            }
        case "CHANGE_SPEED" :
            return {
                ...state,
                speed: action.payload
            }
        default :
            return state
    }
}