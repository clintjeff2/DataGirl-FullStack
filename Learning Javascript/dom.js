//Selecting elements using the ID
let element1 = document.getElementById('one');
let element2 = document.getElementById('two');

element1.innerHTML = 'The first element with id = one';
element2.innerText = 'The first element with id = two';
element1.textContent = 'This is text Content';
console.log(element1);
console.log(element2);

//SELECTING ELEMENTS BY CLASS NAMES
let elements = document.getElementsByClassName('element');

console.log(elements);

//SELECTING BY QUERY
let elements1 = document.querySelector('.element');
console.log(elements1);

//SELECTING BY QUERY ALL
let elements12 = document.querySelectorAll('.element');
console.log(elements12);

//SELECTING ELEMENTS BY TAG NAME
let allTags = document.getElementsByTagName('div');
console.log(allTags);

function modifyElement() {
	element1.innerHTML = 'I WAS CLICKED';
	element1.style.color = 'orange';
	element1.style.backgroundColor = 'black';
}

//EVENTS WITH DOM
//click, mouseover, mousedown, mouseup, change, focus, load, keypressed, keydown, keyup
element1.onload = modifyElement;

element2.addEventListener('click', function () {
	element1.innerHTML = 'I WAS CLICKED';
	element1.style.color = 'orange';
	element1.style.backgroundColor = 'black';
});
