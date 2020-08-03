import React from 'react'
import {conwayLink} from '../../misc'

function About() {
    return (
        <div className="About">
            {/* section block */}
            <div className="about-section">
                <div className="img-container">
                    <img src={conwayLink} alt="John Conway"/>
                </div>
                <div className="content-container">
                    <h2>John Conway</h2>
                    <p>John Horton Conway was an English mathematician active in the theory of finite groups, knot theory, number theory, combinatorial game theory and coding theory. He also made contributions to many branches of recreational mathematics, most notably the invention of the cellular automaton called the Game of Life.</p>
                    <p>Born and raised in Liverpool, Conway spent the first half of his career at the University of Cambridge before moving to the United States, where he held the John von Neumann Professorship at Princeton University for the rest of his career. On 11 April 2020, at age 82, he died of complications from COVID-19.</p>
                </div>
            </div>
            {/* section block reversed */}
            <div className="about-section reverse">
                <div className="img-container">
                    <img src='https://i.stack.imgur.com/krPwE.png' alt="grid"/>
                </div>
                <div className="content-container-reverse">
                    <h2>Game of Life</h2>
                    <p>The Game of Life, also known simply as Life, made its first public appearance in the October 1970 issue of Scientific American, in Martin Gardner's "Mathematical Games" column. Theoretically, the Game of Life has the power of a universal Turing machine: anything that can be computed algorithmically can be computed within the Game of Life. Gardner wrote, "Because of Life's analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called 'simulation games' (games that resemble real life processes)."</p>
                    <p>The Game of Life is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
                </div>
            </div>
            {/* section block */}
            <div className="about-section">
                <div className="img-container" alt="grid">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Game_of_life_infinite1.svg/324px-Game_of_life_infinite1.svg.png' alt='grid'/>
                </div>
                <div className="content-container">
                    <h2>Rules</h2>
                    <p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
                    <ol>
                        <li className="rule">Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                        <li className="rule">Any live cell with two or three live neighbours lives on to the next generation.</li>
                        <li className="rule">Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                        <li className="rule">Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default About