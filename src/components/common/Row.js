import React from 'react';
import PropTypes from 'prop-types';

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

Row.propTypes = {
    lef: PropTypes.node,
    right: PropTypes.node
};

export default Row;