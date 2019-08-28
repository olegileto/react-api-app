import React from 'react';
import {Link} from "react-router-dom";

import './AppHeader.css';

const AppHeader = () => {
    return (
        <div className="AppHeader d-flex">
            <h3>
                <Link to='/'>Star DВ</Link>
            </h3>
            <ul className='d-flex'>
                <li>
                    <Link to='/people'>People</Link>
                </li>
                <li>
                    <Link to='/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships'>Starships</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/secret'>Secret</Link>
                </li>
            </ul>
        </div>
    )
};

export default AppHeader;