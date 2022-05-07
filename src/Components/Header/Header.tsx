import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
return(
    <header>
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/addpatient' className='nav-link'>Add Patient</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/administrator' className='nav-link'>Administrator Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
}
export default Header;