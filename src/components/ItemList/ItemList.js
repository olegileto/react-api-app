import React from 'react';

import './ItemList.css';

const ItemList = (props) => {

    const {data, onSelectedItem, children: renderLabel} = props;

    const items = data.map((item) => {
        const {id} = data;
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

export default ItemList;