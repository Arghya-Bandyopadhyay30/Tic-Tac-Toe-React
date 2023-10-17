import React, { useState } from 'react'
import Board from '../Board/Board'
import './tictactoe.css'

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (nextSquares) => {
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const reset = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true);
    }

    return (
        <div className='container'>
            <h1 className='title' data-testid="title">Tic Tac Toe in <span>React</span></h1>
            <Board xIsNext={xIsNext} squares={squares} onPlay={handleClick}/>
            <button className='button' onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe
