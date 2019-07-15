import React, {Component} from 'react';

import SwapiServices from '../../services/SwapiService';

import './RandomPlanet.css';
import Spinner from "../Spinner/Spinner";
import RandomPlanetView from "./RandomPlanetView";
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {

    swapiServices = new SwapiServices();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor(props) {
        super(props);

        this.updatePlanet();
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    omPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 10) + 2;

        this.swapiServices
            .getPlanet(id)
            .then(this.omPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <RandomPlanetView planet={planet}/> : null;

        return (
            <div className='RandomPlanet jumbotron rounded'>
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}