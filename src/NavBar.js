import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<nav className="NavBar">
			<NavLink to="/pretzels">Pretzels</NavLink>
			<NavLink to="/oreos">Oreos</NavLink>
			<NavLink to="/pirates-booty">Pirates Booty</NavLink>
			<NavLink to="/reeses">Reeses</NavLink>
		</nav>
	);
}

export default NavBar;
