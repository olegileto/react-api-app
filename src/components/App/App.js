import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppHeader from '../AppHeader/AppHeader';
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/SwapiService';
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from "../pages/StarshipsPage";
import StarshipDetails from "../sw-components/StarshipDetails";
import LoginPage from "../pages/LoginPage";
import SecretPage from "../pages/SecretPage";

import './App.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    render() {
        const {isLoggedIn} = this.state;

        return (
            //Context for Swapi Service API
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className='App'>
                        <AppHeader/>
                        <RandomPlanet updateInterval={3500}/>

                        <Switch>
                            <Route
                                path='/'
                                render={() => <h2>Welcome to StarDB</h2>}
                                exact/>
                            <Route
                                path='/people/:id?'
                                component={PeoplePage}/>
                            <Route
                                path='/planets'
                                component={PlanetsPage}/>
                            <Route
                                path='/starships/'
                                component={StarshipsPage}
                                exact/>
                            <Route
                                path='/starships/:id'
                                render={({match}) => {
                                    const {id} = match.params;

                                    return <StarshipDetails itemId={id}/>
                                }}/>
                            <Route
                                path='/login'
                                render={() => <LoginPage
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                                }/>
                            <Route
                                path='/secret'
                                render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>

                            <Route render={() => <h2>404. Page not found!</h2>} />
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )

    }
};
