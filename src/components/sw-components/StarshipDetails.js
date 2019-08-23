import React from 'react';

import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import withSwapiService from '../helpers/withSwapiService';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model: '/>
            <Record field='manufacturer' label='Manufacturer: '/>
            <Record field='length' label='Length: '/>
            <Record field='hyperdriveRating' label='Hyperdrive Rating: '/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }

};

export default withSwapiService(StarshipDetails, mapMethodsToProps)