import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'
import RandomPlanet from '../RandomPlanet/RandomPlanet'

import './App.css';

export default class App extends Component {

    state = {
        selectedPerson: null
    };

    onSelectedItem = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <div className='App'>
                <AppHeader/>
                <RandomPlanet/>

                <div className='flex-container'>
                    <div className='flex-item item-list'>
                        <ItemList onSelectedItem={this.onSelectedItem}/>
                    </div>

                    <div className="flex-item person-details">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )

    }
};
