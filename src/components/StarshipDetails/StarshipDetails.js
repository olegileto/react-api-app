import React, {Component} from 'react';
import SwapiService from "../../services/SwapiService";

export default class StarshipDetails extends Component {

    swapiService = new SwapiService();

    state = {
        starship: null
    };

    componentDidMount() {
        this.updateStarship();
    }

    componentDidUpdate(prevProps) {
        if (this.props.starshipId !== prevProps.starshipId) {
            this.updateStarship();
        }
    }

    updateStarship() {
        const {starshipId} = this.props;

        if (!starshipId) {
            return;
        }

        this.swapiService
            .getStarship(starshipId)
            .then((starship) => {
                this.setState({
                    starship
                })
            })
    }

    render() {
        if (!this.state.starship) {
            return <span>Select a starship from the list</span>
        }

        const {id, name, model, manufacturer, length, hyperdriveRating} = this.state.starship;

        return(
            <div className='StarshipDetails'>
                <div className='person-image'>
                    <img className='person-image'
                         src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                         alt="Image"/>
                </div>

                <div className='card-body flex-block'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Model: </span>
                            <span>{model}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Manufacturer: </span>
                            <span>{manufacturer}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Length: </span>
                            <span>{length}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Hyperdrive Rating: </span>
                            <span>{hyperdriveRating}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}