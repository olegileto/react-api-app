import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/SwapiService';
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from "../pages/StarshipsPage";

import './App.css';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            //Context for Swapi Service API
            <SwapiServiceProvider value={this.swapiService}>
                <div className='App'>
                    <AppHeader/>
                    <RandomPlanet/>

                    <PeoplePage/>
                    <PlanetsPage/>
                    <StarshipsPage/>

                </div>
            </SwapiServiceProvider>
        )

    }
};
