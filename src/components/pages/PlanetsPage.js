import React, {Component} from 'react';

import Row from "../common/Row";
import {PlanetList} from "../sw-components/item-list";
import PlanetDetails from "../sw-components/PlanetDetails";

export default class PlanetsPage extends Component {

    state = {
        selectedItem: null
    };

    onSelectedItem = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <div className='PlanetsPage'>
                <Row
                    left={<PlanetList onSelectedItem={this.onSelectedItem}/>}
                    right={<PlanetDetails itemId={selectedItem}/>}
                />
            </div>
        )
    }
}