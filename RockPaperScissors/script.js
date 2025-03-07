let playBtn = document.getElementById('play');

function changeToPlayAgain() {
	playBtn.innerHTML = 'Play Again';
}

function handleTimer() {
	let timeToDecide = 7;
	let interval = setInterval(function () {
		let timeElement = document.getElementsByTagName('b')[0];
		timeElement.innerHTML = timeToDecide + 's';
		timeToDecide--;

		if (timeToDecide === -1) {
			clearInterval(interval);
		}
	}, 1000);
}

let userPoints = 0;
let computerPoints = 0;

let userChoise = '';
let rock = document.getElementById('rock');
rock.addEventListener('click', function () {
	userChoise = 'rock';
});
let paper = document.getElementById('paper');
paper.addEventListener('click', function () {
	userChoise = 'paper';
});
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', function () {
	userChoise = 'scissors';
});

playBtn.addEventListener('click', function () {
	//Change the text "Play" to "Play Again"
	changeToPlayAgain();

	//Handling the timer with maximum of 7 seconds
	handleTimer();

	let choices = ['rock', 'scissors', 'paper'];
	let computerChoise = '';

	let random = Math.floor(Math.random() * choices.length);
	computerChoise = choices[random];

	if (userChoise === 'rock' && computerChoise === 'paper') {
		computerPoints += 2;
	} else if (userChoise === 'rock' && computerChoise === 'scissors') {
		userPoints += 2;
	} else if (userChoise === 'paper' && computerChoise === 'scissors') {
		computerPoints += 2;
	} else if (userChoise === 'paper' && computerChoise === 'rock') {
		userPoints += 2;
	} else if (userChoise === 'scissors' && computerChoise === 'rock') {
		computerPoints += 2;
	} else if (userChoise === 'scissors' && computerChoise === 'paper') {
		userPoints += 2;
	} else if (userChoise === computerChoise) {
		userPoints++;
		computerPoints++;
	}

	let userPointEle = document.getElementsByTagName('i')[0];
	let compPointEle = document.getElementsByTagName('i')[1];

	userPointEle.innerHTML = userPoints;
	compPointEle.innerHTML = computerPoints;
});

// // setTimeout(function, timeInMilliseconds);
// setTimeout(function () {
// 	console.log('Good morning');
// }, 5000);

// // setInterval(function, timeInMilliseconds);
// let interval = setInterval(function () {
// 	console.log('Good Day');
// }, 2000);

// clearInterval(interval);
