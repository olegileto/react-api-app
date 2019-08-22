import React from 'react';

import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import withSwapiService from '../helpers/withSwapiService';

const PlanetDetails = ({itemId, swapiService}) => {

    const {getPlanet, getPlanetImage} = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field='population' label='Population: '/>
            <Record field='rotationPeriod' label='Rotation Period: '/>
            <Record field='diameter' label='Diameter: '/>
        </ItemDetails>
    )
};

export default withSwapiService(PlanetDetails)