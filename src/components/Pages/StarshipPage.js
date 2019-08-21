import React, {Component} from 'react';
import SwapiService from "../../services/SwapiService";
import ItemList from "../ItemList/ItemList";
import StarshipDetails from "../StarshipDetails/StarshipDetails";

export default class StarshipPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedStarship: null
    };

    onSelectedItem = (id) => {
        this.setState({
            selectedStarship: id
        })
    };

    render() {
        const itemList = (
            <ItemList
                onSelectedItem={this.onSelectedItem}
                getData={this.swapiService.getAllStarships}
                renderItem={({name, model, length}) => `${name} (${model}, ${length})`}
            />);

        return (
            <div className='StarshipPage'>
                <div className='flex-container'>
                    <div className='flex-item item-list'>
                        {itemList}
                    </div>

                    <div className="flex-item person-details">
                        <StarshipDetails starshipId={this.state.selectedStarship}/>
                    </div>
                </div>
            </div>
        )
    }
}