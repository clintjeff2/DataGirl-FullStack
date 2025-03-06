let messageEle = document.getElementById('message');
let timesGuessed = 0;
let previousGuesses = [];

let randomNumber = Math.random() * 100;
randomNumber = Math.floor(randomNumber);

let guessButton = document.getElementById('btn');
guessButton.addEventListener('click', function () {
	let inputElement = document.getElementById('input');
	let userGuess = Number(inputElement.value);

	if (randomNumber === userGuess) {
		messageEle.innerHTML = 'Hurrray!!! Your guess is correct!';
	} else if (randomNumber > userGuess) {
		messageEle.innerHTML = 'Your guess is too low!';
	} else {
		messageEle.innerHTML = 'Your guess is too high!';
	}

	timesGuessed += 1;
	let noGuessEle = document.getElementsByTagName('b')[0];
	noGuessEle.innerHTML = timesGuessed;

	previousGuesses.push(userGuess);
	let previousEle = document.getElementById('numbers');
	// previousEle.innerHTML += userGuess + ',';
	previousEle.innerHTML = previousGuesses;
});
