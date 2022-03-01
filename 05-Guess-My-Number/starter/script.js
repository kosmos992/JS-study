'use strict';
/*
console.log(document.querySelector('.message').textContent); //class니까 .을 앞에 붙여서 호출

document.querySelector('.message').textContent = 'Correct Number! 😁';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayM = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // function은 eventhandler
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    displayM('No number! 💋');

    // win
  } else if (guess === secretNumber) {
    displayM('Correct Number! 😁');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayM(guess > secretNumber ? 'Too high! 🤔' : 'Too low! 🤔');
      score--;
    } else {
      displayM('You lost the game! 😜');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayM('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
