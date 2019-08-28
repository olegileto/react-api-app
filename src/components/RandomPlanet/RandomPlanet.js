import React, {Component} from 'react';
import PropTypes from 'prop-types'

import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css';
import Spinner from "../Spinner/Spinner";
import RandomPlanetView from "./RandomPlanetView";
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const {updateInterval} = this.props;

        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
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

