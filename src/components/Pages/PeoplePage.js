import React, {Component} from 'react';

import ItemList from "../ItemList/ItemList";
import PersonDetails from '../PersonDetails/PersonDetails';
import SwapiService from "../../services/SwapiService";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null
    };

    onSelectedItem = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        const itemList = (
            <ItemList
                onSelectedItem={this.onSelectedItem}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            />
        );

        return (
            <div className='PeoplePage'>
                <div className='flex-container'>
                    <div className='flex-item item-list'>
                        {itemList}
                    </div>

                    <div className="flex-item person-details">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}