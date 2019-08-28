import React from 'react';

import ItemList from '../ItemList/ItemList';
import withData from '../helpers/withData';
import withSwapiService from '../helpers/withSwapiService';

//Component Composition
const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(withChildFunction(renderNameAndPopulation)(ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(withChildFunction(renderNameAndModel)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};