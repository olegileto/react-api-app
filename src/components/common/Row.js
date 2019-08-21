import React from 'react';

const Row  = ({left, right}) => {
    return(
        <div className='flex-container'>
        <div className='flex-item item-list'>
            {left}
        </div>

        <div className="flex-item person-details">
            {right}
        </div>
    </div>
    )
};

export default Row;