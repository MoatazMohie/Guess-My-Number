// Declarations
let secertNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secertNumber;

// Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (valueForNumber) {
  document.querySelector('.number').textContent = valueForNumber;
};

const displayBodyBg = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const displayScore = function (valueForScore) {
  document.querySelector('.score').textContent = valueForScore;
};

const numberWidth = function (val) {
  document.querySelector('.number').style.width = val;
};

// Event Handlers
document.querySelector('.check').addEventListener('click', function () {
  const guessEl = Number(document.querySelector('.guess').value);
  // console.log(guessEl, typeof guessEl);

  // There is no input
  if (!guessEl) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guessEl === secertNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secertNumber);
    displayBodyBg('#60b347');
    numberWidth('30rem');

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess high or low value
  } else if (guessEl != secertNumber) {
    if (score > 1) {
      displayMessage(guessEl > secertNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost The Game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secertNumber = Math.trunc(Math.random() * 21);
  score = 20;
  displayNumber('?');
  displayBodyBg('#222');
  numberWidth('15rem');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayScore(score);
});
