import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context/swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        let serviceProps = {};

                        if (mapMethodsToProps) {
                            serviceProps = mapMethodsToProps(swapiService);
                        }

                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default withSwapiService;