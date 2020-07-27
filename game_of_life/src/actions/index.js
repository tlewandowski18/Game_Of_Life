

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

export const clearCanvas = () => {
    return {
        type: "CLEAR_CANVAS"
    }
}

export const flipGens = item => {
    return {
        type: "FLIP_GENS",
        payload: item
    }
}
