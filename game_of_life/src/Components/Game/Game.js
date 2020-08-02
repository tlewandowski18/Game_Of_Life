import React from 'react'

import GenerationCounter from "./GenerationCounter"
import GameBoard from "./GameBoard"

function Game(){
    return (
        <div className="Game">
            <GenerationCounter></GenerationCounter>
            <GameBoard></GameBoard>
        </div>
    )
}

export default Game