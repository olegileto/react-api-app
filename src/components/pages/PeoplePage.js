import React, {Component} from 'react';

import Row from "../common/Row";
import {PersonList} from "../sw-components/item-list";
import PersonDetails from "../sw-components/PersonDetails";

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onSelectedItem = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <div className='PeoplePage'>
                <Row
                    left={<PersonList onSelectedItem={this.onSelectedItem}/>}
                    right={<PersonDetails itemId={selectedItem}/>}
                />
            </div>
        )
    }
};