import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';
import Spinner from "../Spinner/Spinner";
import RandomPlanetView from "./RandomPlanetView";
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 10) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.omPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
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