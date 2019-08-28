import React from 'react';
import {withRouter} from 'react-router-dom';

import Row from "../common/Row";
import {PersonList} from "../sw-components/item-list";
import PersonDetails from "../sw-components/PersonDetails";

const PeoplePage = ({history, match}) => {
    const {id} = match.params;

    return (
        <div className='PeoplePage'>
            <Row
                left={<PersonList
                    onSelectedItem={(itemId) => history.push(`/people/${itemId}`)}/>}
                right={<PersonDetails itemId={id}/>}
            />
        </div>
    )
};

export default withRouter(PeoplePage);