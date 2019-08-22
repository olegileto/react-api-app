import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-list";
import {PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components/details';

import './App.css';

export default class App extends Component {

    state = {
        selectedPerson: null,
        selectedPlanet: null,
        selectedStarship: null
    };

    render() {
        return (
            <div className='App'>
                <AppHeader/>
                <RandomPlanet/>

                <PersonDetails itemId={11}/>
                <PlanetDetails itemId={5}/>
                <StarshipDetails itemId={10}/>

                <PersonList/>
                <PlanetList/>
                <StarshipList/>
            </div>
        )

    }
};
