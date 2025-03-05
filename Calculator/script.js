// let elementZero = document.getElementById('zero');

// function displayValueOnScreen() {
// 	console.log(elementZero.innerHTML);
// 	let screen = document.getElementsByClassName('body')[0];

// 	screen.innerHTML = screen.innerHTML + elementZero.innerHTML;
// }

// elementZero.addEventListener('click', displayValueOnScreen);

// let elementOne = document.getElementById('one');
// function displayOne() {
// 	let screen = document.getElementsByClassName('body')[0];

// 	screen.innerHTML = screen.innerHTML + elementOne.innerHTML;
// }
// elementOne.addEventListener('click', displayOne);

let onScreenElements = document.getElementsByClassName('appear');
console.log(onScreenElements);

for (let i = 0; i < onScreenElements.length; i++) {
	onScreenElements[i].addEventListener('click', function () {
		let screen = document.getElementsByClassName('body')[0];
		screen.innerHTML = screen.innerHTML + onScreenElements[i].innerHTML;
	});
}

let equalsButton = document.getElementById('equals');

let displayAnswer = () => {
	let screen = document.getElementsByClassName('body')[0];
	let answer = eval(screen.innerHTML);

	console.log(answer);
	screen.innerHTML = answer.toFixed(4);
};

equalsButton.addEventListener('click', displayAnswer);

let AC = document.getElementById('ac');
AC.addEventListener('click', function () {
	let screen = document.getElementsByClassName('body')[0];
	screen.innerHTML = '';
});
