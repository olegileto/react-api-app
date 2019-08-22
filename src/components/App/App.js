import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import {PersonList, PlanetList, StarshipList} from "../sw-components/item-list";
import PersonDetails from '../sw-components/PersonDetails';
import PlanetDetails from '../sw-components/PlanetDetails';
import StarshipDetails from '../sw-components/StarshipDetails';
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/SwapiService';

import './App.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        selectedPlanet: null,
        selectedStarship: null
    };

    render() {
        return (
            //Context for Swapi Service API
            <SwapiServiceProvider value={this.swapiService}>
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
            </SwapiServiceProvider>
        )

    }
};
