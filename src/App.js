import React from 'react';
import VendingMachine from './VendingMachine';
import Pretzels from './Pretzels';
import Oreos from './Oreos';
import PiratesBooty from './PiratesBooty';
import Reeses from './Reeses';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <NavBar /> */}
				<Routes>
					<Route path="/" exact="true" element={<VendingMachine />} />
					<Route path="/pretzels" exact="true" element={<Pretzels />} />
					<Route path="/oreos" exact="true" element={<Oreos />} />
					<Route path="/pirates-booty" exact="true" element={<PiratesBooty />} />
					<Route path="/reeses" exact="true" element={<Reeses />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
