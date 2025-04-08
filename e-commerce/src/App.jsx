import { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header';
import ShoeCardDetails from './components/ShoeCardDetails';
import shoes from './assets/shoes.js';
import ShoeContainer from './components/ShoeContainer.jsx';

export const ProductContext = createContext();

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedShoe, setSelectedShoe] = useState(null);
	const selectShoe = (id) => {
		const myShoe = shoes.filter((el) => el.image === id);
		setSelectedShoe(myShoe[0]);
	};
	return (
		<ProductContext.Provider value={{ product: shoes, selectShoe: selectShoe }}>
			<main>
				<Header />
				<ShoeContainer setIsModalOpen={setIsModalOpen} />
				{isModalOpen && (
					<div
						onClick={() => {
							setIsModalOpen(false);
						}}
						className="detail-section"
					>
						<ShoeCardDetails shoeDetail={selectedShoe} />
					</div>
				)}
			</main>
		</ProductContext.Provider>
	);
}

export default App;
