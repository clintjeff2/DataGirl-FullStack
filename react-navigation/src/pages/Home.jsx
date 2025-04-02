import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';

function Home() {
	const userData = useContext(UserContext);

	console.log(userData);
	return (
		<div>
			<h1>This is my Home Page</h1>
			{userData.users.map((el) => (
				<div key={el.id}>
					id: {el.id} <br /> Name: {el.name} <br /> <br />
				</div>
			))}

			<button
				style={{ color: 'white', backgroundColor: 'green', padding: '10px' }}
				onClick={userData.deleteUsers}
			>
				Delete All
			</button>
		</div>
	);
}

export default Home;

// const perfumeProudcts = [
// 	{
// 		name: 'Hummer',
// 		class: 'luxury',
// 		id: 'Hu-001',
// 		price: 45000,
// 		gender: 'M',
// 		durability: 48,
// 		expiresOn: 'Jan 25 2026',
// 		image: 'perfume-1.jpg',
// 	},
// ];

// const perfumes = [
// 	{
// 		name: 'Hummer',
// 		class: 'luxury',
// 		id: 'Hu-001',
// 		price: 45000,
// 		gender: 'M',
// 		durability: 48,
// 		expiresOn: 'Jan 25 2026',
// 		image: 'perfume-1.jpg',
// 	},
// 	{
// 		name: 'Aqua Essence',
// 		class: 'premium',
// 		id: 'AE-002',
// 		price: 38000,
// 		gender: 'F',
// 		durability: 36,
// 		expiresOn: 'Dec 12 2025',
// 		image: 'perfume-2.jpg',
// 	},
// 	{
// 		name: 'Mystic Oud',
// 		class: 'luxury',
// 		id: 'MO-003',
// 		price: 50000,
// 		gender: 'M',
// 		durability: 60,
// 		expiresOn: 'Nov 10 2027',
// 		image: 'perfume-3.jpg',
// 	},
// 	{
// 		name: 'Rose Bloom',
// 		class: 'classic',
// 		id: 'RB-004',
// 		price: 29000,
// 		gender: 'F',
// 		durability: 30,
// 		expiresOn: 'Aug 15 2025',
// 		image: 'perfume-4.jpg',
// 	},
// 	{
// 		name: 'Citrus Rush',
// 		class: 'sport',
// 		id: 'CR-005',
// 		price: 31000,
// 		gender: 'M',
// 		durability: 40,
// 		expiresOn: 'Jul 05 2026',
// 		image: 'perfume-5.jpg',
// 	},
// 	{
// 		name: 'Vanilla Noir',
// 		class: 'luxury',
// 		id: 'VN-006',
// 		price: 46000,
// 		gender: 'F',
// 		durability: 50,
// 		expiresOn: 'Oct 20 2026',
// 		image: 'perfume-6.jpg',
// 	},
// 	{
// 		name: 'Ocean Breeze',
// 		class: 'fresh',
// 		id: 'OB-007',
// 		price: 32000,
// 		gender: 'M',
// 		durability: 35,
// 		expiresOn: 'Mar 15 2025',
// 		image: 'perfume-7.jpg',
// 	},
// 	{
// 		name: 'Golden Sand',
// 		class: 'luxury',
// 		id: 'GS-008',
// 		price: 55000,
// 		gender: 'M',
// 		durability: 70,
// 		expiresOn: 'Sep 09 2028',
// 		image: 'perfume-8.jpg',
// 	},
// 	{
// 		name: 'Lavender Bliss',
// 		class: 'classic',
// 		id: 'LB-009',
// 		price: 28000,
// 		gender: 'F',
// 		durability: 28,
// 		expiresOn: 'Jun 11 2025',
// 		image: 'perfume-9.jpg',
// 	},
// 	{
// 		name: 'Spice Bomb',
// 		class: 'sport',
// 		id: 'SB-010',
// 		price: 33000,
// 		gender: 'M',
// 		durability: 45,
// 		expiresOn: 'Apr 18 2026',
// 		image: 'perfume-10.jpg',
// 	},
// ];

// FreePick;
// PixaBay;
// ShutterStock;
// Pexels;
