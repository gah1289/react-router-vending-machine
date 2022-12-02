import React from 'react';
import vendingMachine from './images/vending-machine.jpg';
import NavBar from './NavBar';

// A VendingMachine component, which shows a page with a list of snacks that you can get from the vending machine.

function VendingMachine() {
	return (
		<div className="VendingMachine">
			<h1>Vending Machine!</h1>
			<NavBar /> <img src={vendingMachine} />
		</div>
	);
}

export default VendingMachine;
