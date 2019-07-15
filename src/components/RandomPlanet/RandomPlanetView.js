import React from 'react';

const RandomPlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <div className='image-around'>
                <img className='planet-image'
                     src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}/>
            </div>


            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population </span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

};

export default RandomPlanetView;