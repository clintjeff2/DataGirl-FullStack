import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import NavBar from './components/NavBar';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
	let [data, setData] = useState([
		{ id: Date.now(), name: 'Alice' },
		{ id: Date.now() + 1, name: 'Bob' },
		{ id: Date.now() + 2, name: 'Charlie' },
		{ id: Date.now() + 3, name: 'David' },
		{ id: Date.now() + 4, name: 'Emma' },
		{ id: Date.now() + 5, name: 'Frank' },
		{ id: Date.now() + 6, name: 'Grace' },
		{ id: Date.now() + 7, name: 'Henry' },
		{ id: Date.now() + 8, name: 'Ivy' },
		{ id: Date.now() + 9, name: 'Jack' },
		{ id: Date.now() + 10, name: 'Karen' },
		{ id: Date.now() + 11, name: 'Leo' },
	]);

	const deleteData = () => {
		setData([]);
	};
	return (
		<UserContext.Provider value={{ users: data, deleteUsers: deleteData }}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
