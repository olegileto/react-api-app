import React from 'react';
import {withRouter} from 'react-router-dom';

import {StarshipList} from '../sw-components/item-list';

const StarshipsPage = ({history}) => {
    return (
        <div className='StarshipsPage'>
            <StarshipList onSelectedItem={(itemId) => history.push(`/starships/${itemId}`)}/>
        </div>
    )
};

export default withRouter(StarshipsPage);