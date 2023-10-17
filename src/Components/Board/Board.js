import React, { useState } from 'react'
import Square from '../Square/Square'
import './board.css'
import WinnerCalculator from '../Winner/WinnerCalculator';

const Board = ({xIsNext, squares, onPlay}) => {
    const winner = WinnerCalculator(squares);

    const handleClick = (i) => {
        if(winner || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        if(xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        
        onPlay(nextSquares);
    }

    let status;
    if(winner) {
        status = 'Winner: ' + winner; 
    }
    else {
        status = 'Next Move: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <h3 className='subtitle' data-testid="status">{status}</h3>
            <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            </div>
        </>
  )
}

export default Board