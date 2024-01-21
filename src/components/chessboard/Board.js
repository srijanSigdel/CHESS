import React from 'react';
import Pieces from '../Pieces/Pieces';

const Board = () => {

  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? ' bg-green' : ' bg-creamwhite';
    return c;
  }

  const ranks = Array(8).fill().map((x, i) => 8 - i);
  const files = Array(8).fill().map((x, i) => i + 1);

  return (
    <div className="h-max w-max flex">
      <div className="grid grid-cols-8 grid-rows-8 relative">
        {ranks.map((rank, i) =>
          files.map((file, j) =>
            <div className={getClassName(9 - i, j) + " h-[75px] w-[75px] text-gray text-xs"} key={file + "-" + rank}></div>
          )
        )}
        <Pieces />
      </div>
    </div>
  )
}

export default Board
