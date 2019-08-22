import React from 'react';

//Context Provider and Consumer
const {
    Provider: SwapiServiceProvider,
    Consumer: SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceProvider,
    SwapiServiceConsumer
}