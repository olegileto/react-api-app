import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'
import RandomPlanet from '../RandomPlanet/RandomPlanet'

import './App.css';

export default class App extends Component {

    state = {
        selectedPerson: 5
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

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onSelectedItem={this.onSelectedItem}/>
                    </div>

                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )

    }
};
