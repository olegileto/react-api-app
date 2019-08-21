import React, {Component} from 'react';

import ItemList from "../ItemList/ItemList";
import PersonDetails from '../PersonDetails/PersonDetails';
import SwapiService from "../../services/SwapiService";
import Row from '../common/Row';

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

        const personDetails  = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <div className='PeoplePage'>
                <Row left={itemList} right={personDetails}/>
            </div>
        )
    }
}