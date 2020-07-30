const initialState = {
    isRunning: false,
    iterations: 0
}

export default function runningReducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT_ITERATIONS" :
            return {
                ...state,
                iterations: state.iterations + 1
            }
        case "RESET_ITERATIONS" : {
            return {
                ...state,
                iterations: 0
            }
        }
        case "TOGGLE_IS_RUNNING" :
            return {
                ...state,
                isRunning: !state.isRunning
            }
        
        default :
            return state
    }
}