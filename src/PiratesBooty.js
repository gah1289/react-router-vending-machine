import React from 'react';
import './Snack.css';
import Snack from './Snack';
import booty from './images/booty.jpg';
import { NavLink } from 'react-router-dom';

// Pirates Booty component

function PiratesBooty() {
	return (
		<div className="Snack">
			<Snack name="pirates-booty" img={booty} />
		</div>
	);
}

export default PiratesBooty;
