import React from 'react';
import './Snack.css';
import Snack from './Snack';
import reeses from './images/reeses.jpg';
import { NavLink } from 'react-router-dom';

// Reeses component

function Reeses() {
	return (
		<div className="Snack">
			<Snack name="reeses" img={reeses} />
		</div>
	);
}

export default Reeses;
