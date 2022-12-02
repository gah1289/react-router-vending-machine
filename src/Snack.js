import React from 'react';
import './Snack.css';
import { NavLink } from 'react-router-dom';

// Simple visual snack.

// Props: img

function Snack({ name, img }) {
	return (
		<div>
			<img className="Snack" src={img} alt={`Picture of ${name}`} />
			<NavLink className="nav-link" to="/">
				Get another Snack
			</NavLink>
		</div>
	);
}

export default Snack;
