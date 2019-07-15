import React, {Component} from 'react';

import Spinner from "../Spinner/Spinner";

import './ItemList.css';
import SwapiService from '../../services/SwapiService';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: []
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    };

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li key={id}
                    className='list-group-item'
                    onClick={() => this.props.onSelectedItem(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {peopleList} = this.state;

        const items = this.renderItems(peopleList);

        if (!peopleList) {
            return <Spinner/>
        }

        return (
            <ul className='ItemList list-group'>
                {items}
            </ul>
        )
    }
}