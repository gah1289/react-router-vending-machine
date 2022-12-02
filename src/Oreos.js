import React from 'react';
import './Snack.css';
import Snack from './Snack';
import oreos from './images/oreos.jpg';
import { NavLink } from 'react-router-dom';

// Oreo component

function Oreos() {
	return (
		<div className="Snack">
			<Snack name="oreos" img={oreos} />
		</div>
	);
}

export default Oreos;
