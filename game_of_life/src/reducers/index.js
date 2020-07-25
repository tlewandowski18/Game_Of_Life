const initialState = {
    isRunning: false,
    current_gen: null,
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
            const cellKey = action.payload.key
            const value = action.payload.value
            return {
                    ...state,
                    current_gen: {
                        ...state.current_gen,
                        [cellKey]: value
                    }
                }
        default:
            return state
    }
}