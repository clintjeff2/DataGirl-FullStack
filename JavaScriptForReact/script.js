//ARROW FUNCTIONS IN ES6

// function functionName(param1, param2, param3){
//   //code
// }

// const functionName = (param1, param2, param3) => {
//   //code
// }

const howToEat = () => {
	console.log('1. Collect the Food');
	console.log('2. Wash your hands');
	console.log('3. Choose your cutlery');
	console.log('4. Carry food with the cutlery');
	console.log('5. Put in your mouth');
	console.log('6. Chew and Swallow');
};

howToEat();

//OBJECTS IN ES 6
let students = {
	name: 'John',
	age: 14,
	class: 'Form 4',
	series: 'Arts',
};

console.log(students);
// students.parentName = 'Parker';
let completeStud = {
	parentName: 'Parker',
	...students,
};

console.log(completeStud);
//From an object, you need all the keys as an array. (Object.keys())
console.log(Object.keys(students));

//From an object, you need all the values as an array. (Object.values())
console.log(Object.values(students));

//Convert and object to array (Object.entries())
// [['name', 'John'], ['age', 14], ['class', 'Form 4'], ['series', 'Arts']]
console.log(Object.entries(students));

//ARRAYS IN ES6
//... is called the SPREAD OPERATOR

const greenFruits = ['Apple', 'Mango', 'Guava', 'Oranges', 'Melon', 'Pawpaw'];
const randomColorFruits = ['Pineapple', 'Banana', 'Plum'];

console.log(greenFruits);

const fruits = [
	...greenFruits,
	'Strawberry',
	'Pears',
	...randomColorFruits,
	'Grapes',
	'Tomatoes',
];
console.log(fruits);

//ARRAY LOOP METHODS IN ES6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const newArray = [];
for (let j = 0; j < numbers.length; j++) {
	newArray.push(numbers[j] * 10);
}
console.log(newArray);

//MAP LOOP
// const mapArray = numbers.map(function (value) {
//   return value * 10;
// });

// const mapArray = numbers.map((dog) => {
// 	return dog * 10;
// });

const mapArray = numbers.map((dog) => dog * 10);

console.log(mapArray);

mapArray.map((sth, yam, arg) => {
	console.log(sth + ': ', yam + ':::' + arg);
});

//FILTER LOOP
// const greaterNumber = numbers.filter((ele) => {
// 	if (ele > 5) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

const greaterNumber = numbers.filter((ele) => ele > 5)

console.log(greaterNumber);
