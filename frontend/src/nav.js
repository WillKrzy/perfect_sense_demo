import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => (
    <React.Fragment>
        <nav>
            <Link to="/article-list">Article Lisst</Link>
        </nav>
    </React.Fragment>

);
export default NavBar;