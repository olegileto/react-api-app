import React, {Component} from 'react';
import SwapiService from "../../services/SwapiService";
import ItemList from "../ItemList/ItemList";
import StarshipDetails from "../StarshipDetails/StarshipDetails";
import Row from "../common/Row";

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

        const starshipDetails = (
            <StarshipDetails starshipId={this.state.selectedStarship}/>
        );

        return (
            <div className='StarshipPage'>
                <Row left={itemList} right={starshipDetails}/>
            </div>
        )
    }
}