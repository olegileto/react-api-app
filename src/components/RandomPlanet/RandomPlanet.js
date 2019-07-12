import React, {Component} from 'react';

import SwapiServices from '../../services/SwapiService';

import './RandomPlanet.css';
import Spinner from "../Spinner/Spinner";
import RandomPlanetView from "./RandomPlanetView";

export default class RandomPlanet extends Component {

    swapiServices = new SwapiServices();

    state = {
        planet: {},
        loading: true
    };

    constructor(props) {
        super(props);

        this.updatePlanet();
    }

    omPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;

        this.swapiServices
            .getPlanet(id)
            .then(this.omPlanetLoaded)
    }

    render() {
        const {planet, loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <RandomPlanetView planet={planet}/> : null;

        return (
            <div className='RandomPlanet jumbotron rounded'>
                {spinner}
                {content}
            </div>
        )
    }
}