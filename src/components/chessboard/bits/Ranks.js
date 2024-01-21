import React from 'react'

const Ranks = ({ ranks }) => {
    return (
        <div className='w-max mr-3 flex flex-col items-center justify-between'>
            {ranks.map(rank => <span>{rank}</span>)}
        </div>
    )
}

export default Ranks
