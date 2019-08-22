import React from 'react';
import ItemList from '../ItemList/ItemList';
import withData from '../helpers/withData';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

//Component Composition
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;
const renderNameAndPopulation = ({name, population}) => <span>{name} ({population})</span>   ;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderNameAndPopulation), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};