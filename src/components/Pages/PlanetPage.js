import React, {Component} from 'react';

import ItemList from "../ItemList/ItemList";

import SwapiService from "../../services/SwapiService";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

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

        return (
            <div className='PlanetPage'>
                <div className='flex-container'>
                    <div className='flex-item item-list'>
                        {itemList}
                    </div>

                    <div className="flex-item person-details">
                        <PlanetDetails planetId={this.state.selectedPlanet}/>
                    </div>
                </div>
            </div>
        )
    }
}