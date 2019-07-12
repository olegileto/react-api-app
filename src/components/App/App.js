import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails'
import RandomPlanet from '../RandomPlanet/RandomPlanet'

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <AppHeader/>
            <RandomPlanet/>

            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList/>
                </div>

                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>
    )
};

export default App;