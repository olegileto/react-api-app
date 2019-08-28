import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({data, onSelectedItem, children: renderLabel}) => {

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);

        return (
            <li key={id}
                className='list-group-item'
                onClick={() => onSelectedItem(id)}>
                {label}
            </li>
        )
    });

    return (
        <ul className='ItemList list-group'>
            {items}
        </ul>
    )
};

ItemList.defaultProps = {
    onSelectedItem: () => {}
};

ItemList.propTypes = {
    onSelectedItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;