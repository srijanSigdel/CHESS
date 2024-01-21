import React from 'react';
import './piece.css';

const Piece = ({ rank, file, piece }) => {
  return (
    <div className={`absolute w-[12.5%] h-[12.5%] bg-contain cursor-grab piece ${piece} p-${rank}${file}`} draggable="true">
    </div>
  )
}

export default Piece
