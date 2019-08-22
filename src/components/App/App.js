import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ItemDetails, {Record} from "../PersonDetails/ItemDetails";
import SwapiService from "../../services/SwapiService";

import './App.css';
import Row from "../common/Row";
import ItemPage from "../ItemPage/ItemPage";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        selectedPlanet: null,
        selectedStarship: null
    };

    render() {
        const {
            getPerson,
            getPlanet,
            getAllStarships,
            getPersonImage,
            getPlanetImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender: '/>
                <Record field='birthYear' label='Birth Year: '/>
            </ItemDetails>
        );

        const planetDetails = (
            <ItemDetails itemId={6} getData={getPlanet} getImageUrl={getPlanetImage}>
                <Record field='population' label='Population: '/>
                <Record field='diameter' label='Diameter: '/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails getData={getAllStarships}/>
        );

        return (
            <div className='App'>
                <AppHeader/>
                <RandomPlanet/>

                <Row left={personDetails} right={planetDetails}/>
            </div>
        )

    }
};
