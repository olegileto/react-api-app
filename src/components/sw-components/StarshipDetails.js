import React from 'react';

import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import withSwapiService from '../helpers/withSwapiService';

const StarshipDetails = ({itemId, swapiService}) => {

    const {getStarship, getStarshipImage} = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field='model' label='Model: '/>
            <Record field='manufacturer' label='Manufacturer: '/>
            <Record field='length' label='Length: '/>
            <Record field='hyperdriveRating' label='Hyperdrive Rating: '/>
        </ItemDetails>
    )
};

export default withSwapiService(StarshipDetails)