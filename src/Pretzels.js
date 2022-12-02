import React from 'react';
import './Snack.css';
import Snack from './Snack';
import pretzels from './images/pretzels.jpg';
import { NavLink } from 'react-router-dom';

// Pretzel component

function Pretzels() {
	return (
		<div className="Snack">
			<Snack name="pretzels" img={pretzels} />
		</div>
	);
}

export default Pretzels;
