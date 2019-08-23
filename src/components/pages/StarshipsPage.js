import React, {Component} from 'react';

import Row from "../common/Row";
import {StarshipList} from '../sw-components/item-list';
import StarshipDetails from '../sw-components/StarshipDetails';

export default class StarshipsPage extends Component {

    state = {
        selectedItem: null
    };

    onSelectedItem = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <div className='StarshipsPage'>
                <Row
                    left={<StarshipList onSelectedItem={this.onSelectedItem}/>}
                    right={<StarshipDetails itemId={selectedItem}/>}
                />
            </div>
        )
    }
}