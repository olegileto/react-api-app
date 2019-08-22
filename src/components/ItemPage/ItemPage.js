import React, {Component} from 'react';

import ItemList from "../ItemList/ItemList";
import ItemDetails from '../ItemDetails/ItemDetails';
import SwapiService from "../../services/SwapiService";
import Row from '../common/Row';

export default class ItemPage extends Component {

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
            <ItemDetails personId={this.state.selectedPerson}/>
        );

        return (
            <div className='PeoplePage'>
                <Row left={itemList} right={personDetails}/>
            </div>
        )
    }
}