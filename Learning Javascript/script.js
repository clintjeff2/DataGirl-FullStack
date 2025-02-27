//COMMENTS
//console.log('Logging');
/*console.log("This is something");
console.log("This is something");
console.log("This is something");
*/

//VARIABLES
/*var x;
var y;
var name;
var myHouseMate;

let house;
let fruit = 'Pear';
console.log(fruit);

const pi = 3.14;
const identity = 'LETTERS';



x = 20;
y = 31;
name = 'Ngwa';

house = 'Pent House';
fruit = 'Apples';
myHouseMate = 'Anna';

console.log(pi);

pi = 5;
console.log(pi);

console.log(identity);
console.log(house, fruit, myHouseMate, name, x, y);
*/

//OPERATORS
/*let num1 = 10;
let num2 = 6;
let num3 = 8;

let answer = num1 + num2;
console.log(answer);

let newNumber = 12;
// answer = newNumber + answer;
answer += newNumber;
console.log(answer);

let number = 30;
number++;
console.log(number);
number++;
console.log(number);
number++;
console.log(number);
*/

//DATATYPES
/*
let fruit = 'Apples';
let amount = 2000;
let pi = 3.14;

let letter = 'Z';
let isSunny = true;

console.log(typeof fruit);
console.log(typeof isSunny);

let person = { height: 1.8, color: 'dark', weight: 60 };
console.log(typeof person);

let height = 160;
let allHeights = [140, 160, 130, 160, 170];
console.log(typeof allHeights);

let carName;
console.log(typeof carName);
*/

//FUNCTIONS
/*function functionName(){
  //code here
}*/
//Function that tells me how to eat
/*
function howToEat() {
	console.log('1. Collect the Food');
	console.log('2. Wash your hands');
	console.log('3. Choose your cutlery');
	console.log('4. Carry food with the cutlery');
	console.log('5. Put in your mouth');
	console.log('6. Chew and Swallow');
}

//Assume you've seen the food
howToEat();

//Function to add two number
function addNumbers() {
	let num1 = 10;
	let num2 = 20;

	console.log(num1 + num2);
}

addNumbers();

//Function to add ANY two numbers
function addAnyNumbers(number1, number2) {
	console.log(number1 + number2);
}
addAnyNumbers(40, 23);
addAnyNumbers(780, 23); */

//OBJECTS
//Let's model a chair as an object
/*
let chair = {
	color: 'brown',
	height: 1,
	weight: 50,
	legs: 4,
};
console.log(chair);

//Accessing object values
console.log(chair.weight);
console.log(chair['weight']);

chair.isPortable = true;
chair['isExpensive'] = false;
console.log(chair);

//Modelling a car as an object
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
};

car.move();
car.stop();
*/

//STRINGS
/*let sentence = 'the quick brown fox jumps over the lazy dog';
console.log(sentence.length);

console.log(sentence);
//String methods
console.log(sentence.toLowerCase());

console.log(sentence.toUpperCase());

console.log(sentence.concat(' ', 'This is another text'));

console.log(sentence.search('quick'));
*/

//NUMBERS
/*let number = 2000;
let gpa = 2.98;
let width = 200.983749474;
let bitcoin = 0.00023658479865487;

let age = '30';

Number(age);
let answer = 2 * 'hello';
console.log(answer);
// NaN;
console.log(isNaN(answer));

let num1 = 45;
console.log(num1);

let num1String = num1.toString();
console.log(num1String);
console.log(30);
console.log('30');
console.log('This is a sentence');

let average = 16.5478;
// 16.55
console.log(average.toFixed(2));
console.log(average.toPrecision(1));
console.log(average.toPrecision(2));
console.log(average.toPrecision(3));

console.log(parseInt(average));
*/

//ARRAYS
/*
let fruits = [
	'Apple',
	'Mango',
	'Banana',
	'Limes',
	'Grapes',
	'Orange',
	'Pear',
	'Kiwi',
	'Strawberry',
	'Tomatoes',
	'Plum',
	'Dragon Fruit',
	'Beetroot',
	'Pineapple',
	'Water Melon',
];

let cars = [
	{
		name: 'Sonata',
		color: 'White',
		weight: 1000,
	},
	{
		name: 'Benz',
		color: 'Red',
		weight: 3000,
	},
	{
		name: 'G Wagon',
		color: ['B', 'l', 'a', 'c', 'k'],
		weight: 5000,
	},
	{
		name: 'Ferari',
		color: [
			['G', 'r', 'e', 'e', 'n'],
			['B', 'l', 'a', 'c', 'k'],
			['W', 'h', 'i', 't', 'e'],
		],
		weight: 700,
	},
	{
		name: 'Lexus',
		color: ['A', 's', 'h'],
		weight: 3000,
	},
	{
		name: 'McLaren',
		color: 'Black',
		weight: 800,
	},
	{
		name: 'Range Rover',
		color: 'White',
		weight: 4500,
	},
	{
		name: 'Cyber Truck',
		color: 'Grey',
		weight: 6500,
	},
];

//Length
console.log('Number of Fruits: ' + fruits.length);
console.log('Number of Cars: ' + cars.length);

//How to access elements in an array
// console.log(fruits);
console.log(fruits[14]);
fruits[14] = 'Egg Plant';
console.log(fruits[14]);
fruits[15] = 'Guava';

// console.log(fruits);

//Using the pop, push, unshift methods
fruits.push('Tangerine');
fruits.push('Cucumber');

fruits.unshift('Water Melon');

fruits.pop();
fruits.pop();

fruits.shift();

// fruits.sort();
// fruits.reverse();
fruits.sort().reverse();
// console.log(fruits);

console.log(cars);
console.log(cars[0]);
console.log(cars[3].color[1][4]);

let letters = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
let sentence = ['This', 'is', 'Javascript'];

let lettersArray = letters.split(',');
console.log(lettersArray);

console.log(sentence.join('__'));

// console.log(characters.split(''));
*/

//If statements and conditions

//Syntax for using conditions and if statements
// if(condition){
// 	//code
// }else{
// 	//code
// }
let age = 55;
let age2 = 10;
let age3 = 3;
let age4 = 12;

if (age2 > 19) {
	console.log('You are an adult');
}

if (age4 <= 19 || age4 >= 13) {
	console.log('You are a teenager');
}

if (age > 60) {
	console.log('Go on retirement');
} else {
	console.log('Keep working');
}

//Syntax for if...else if....else
// if(condition1){
// 	//code
// }else if(condition2){

// }else{

// }

if (age > 60) {
	console.log('Go on Retirement');
} else if (age == 60) {
	console.log('You have 1 more year of work');
}else if(age == 55){
	console.log("You have 5 year of work left!");
}else {
	console.log('Continue Working');
}
