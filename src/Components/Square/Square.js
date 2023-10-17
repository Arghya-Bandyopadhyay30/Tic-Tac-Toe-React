import React from 'react'
import './square.css'

const Square = ({value, onSquareClick}) => {
  return (
    <div>
        <button className='box' onClick={onSquareClick}>
          {value}
        </button>
    </div>
  )
}

export default Square
