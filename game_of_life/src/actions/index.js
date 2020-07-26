export const setInitialState = (item) => {
    return {
        type: "SET_INITIAL_STATE",
        payload: item
    }
}

export const toggleCell = (item) => {
    return {
        type: "TOGGLE_ITEM",
        payload: item
    }
}

export const toggleIsRunning = () => {
    return {
        type: "TOGGLE_IS_RUNNING"
    }
}