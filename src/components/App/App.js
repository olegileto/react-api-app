import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import PeoplePage from '../Pages/PeoplePage';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";

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

                <PeoplePage/>
                <PlanetPage/>
                <StarshipPage/>
            </div>
        )

    }
};
