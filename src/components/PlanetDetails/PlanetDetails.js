import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService';
export default class PlanetDetails extends Component{

    swapiService  = new SwapiService();

    state = {
        planet: null
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if (this.props.planetId !== prevProps.planetId) {
            this.updatePlanet();
        }
    }


    updatePlanet() {
        const {planetId} = this.props;

        if (!planetId) {
            return;
        }

        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({
                    planet
                })
            })
    }

    render() {
        if (!this.state.planet) {
            return <span>Select a planet for the list</span>
        }

        const {id, name, population, rotationPeriod, diameter} = this.state.planet

        return (
            <div className='PlanetDetails'>
                <div className='person-image'>
                    <img className='person-image'
                         src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt="Image"/>
                </div>

                <div className='card-body flex-block'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period: </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter: </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}