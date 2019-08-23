import React from 'react';

import ItemList from '../ItemList/ItemList';
import withData from '../helpers/withData';
import withSwapiService from '../helpers/withSwapiService';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
      getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;
const renderNameAndPopulation = ({name, population}) => <span>{name} ({population})</span>;

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderNameAndPopulation)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderNameAndModel)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};