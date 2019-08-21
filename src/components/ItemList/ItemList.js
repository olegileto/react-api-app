import React, {Component} from 'react';

import Spinner from "../Spinner/Spinner";

import './ItemList.css';

export default class ItemList extends Component {

    state = {
        itemList: []
    };

    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    };

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li key={id}
                    className='list-group-item'
                    onClick={() => this.props.onSelectedItem(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        const items = this.renderItems(itemList);

        if (!itemList) {
            return <Spinner/>
        }

        return (
            <ul className='ItemList list-group'>
                {items}
            </ul>
        )
    }
}