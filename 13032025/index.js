//JAVASCRIPT LITERALS
let names = 'Parker Johnson';

console.log('My names are ${names}');
console.log(`My names are ${names}`);

//JS Destructuring
//ARRAYS
const fruits = ['apples', 'Melon', 'Oranges', 'Grapes', 'Pineapple'];
console.log(fruits);

const [firstFruit, fruit2, fruit3, , fruit5] = fruits;
console.log(firstFruit);
console.log(fruit2);
console.log(fruit3);

//OBJECTS
let car = {
	color: 'red',
	name: 'Benz',
	model: 'C300',
	weight: 1000,
	speed: 60,
	move: function () {
		console.log('The car is moving');
	},
	stop: function () {
		console.log('The car is stopping');
	},
	price: 7000,
};
const { move, weight: newWeight, color, name, model, price = 5000 } = car;
move();
console.log(newWeight, model, price);
