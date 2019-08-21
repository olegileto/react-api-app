import React, {Component} from 'react';

import ItemList from "../ItemList/ItemList";

import SwapiService from "../../services/SwapiService";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import Row from "../common/Row";

export default class PlanetPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPlanet: null
    };

    onSelectedItem = (id) => {
        this.setState({
            selectedPlanet: id
        })
    };

    render() {
        const itemList = (
            <ItemList
                onSelectedItem={this.onSelectedItem}
                getData={this.swapiService.getAllPlanets}
                renderItem={({name, population, diameter}) => `${name} (${population}, ${diameter})`}
            />
        );

        const planetDetails  = (
            <PlanetDetails planetId={this.state.selectedPlanet}/>
        );

        return (
            <div className='PlanetPage'>
               <Row left={itemList} right={planetDetails}/>
            </div>
        )
    }
}