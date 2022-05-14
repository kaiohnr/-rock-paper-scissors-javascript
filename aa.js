const phraseResult = document.querySelector('.sentence-result');

const userImage = document.querySelector('.user-img');
const computerImage = document.querySelector('.computer-img');

let userScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.computer-score');

const rockChoice = document.querySelector('#rock-choice');
const paperChoice = document.querySelector('#paper-choice');
const scissorsChoice = document.querySelector('#scissors-choice');

const restartBtn = document.querySelector('.restart-btn');

const rockImage = 'images/rock.png';
const scissorsImage = 'images/scissors.png';
const paperImage = 'images/paper.png';

let test;

const computerChoice = function () {
  const choices = [rockChoice, paperChoice, scissorsChoice];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  test = choice.textContent;
};

const lostResult = function () {
  +userScore.textContent === 0 ? +userScore : +userScore.textContent--;
  +computerScore.textContent++;
};

const wonResult = function () {
  +userScore.textContent++;
  +computerScore.textContent === 0 ? +computerScore : +computerScore.textContent--;
};

rockChoice.addEventListener('click', function () {
  console.log(computerChoice());
  if (computerChoice() == 0) {
    phraseResult.textContent = "Computer chose Rock. It's a draw!";
    userImage.src = rockImage;
    computerImage.src = rockImage;
  }
  if (computerChoice() === 1) {
    phraseResult.textContent = 'Computer chose Paper. You lost!';
    userImage.src = rockImage;
    computerImage.src = paperImage;
    lostResult();
  }
  if (computerChoice() === 2) {
    phraseResult.textContent = 'Computer chose Scissors. You won!';
    userImage.src = rockImage;
    computerImage.src = scissorsImage;
    wonResult();
  }
});

paperChoice.addEventListener('click', function () {
  if (computerChoice() === 0) {
    phraseResult.textContent = 'Computer chose Rock. You won!';
    userImage.src = paperImage;
    computerImage.src = rockImage;
    wonResult();
  }
  if (computerChoice() === 1) {
    phraseResult.textContent = "Computer chose Paper. It's a draw!";
    userImage.src = paperImage;
    computerImage.src = paperImage;
  }
  if (computerChoice() === 2) {
    phraseResult.textContent = 'Computer chose Scissors. You lost!';
    userImage.src = paperImage;
    computerImage.src = scissorsImage;
    lostResult();
  }
});

scissorsChoice.addEventListener('click', function () {
  if (computerChoice() === 0) {
    phraseResult.textContent = 'Computer chose Rock. You lost!';
    userImage.src = scissorsImage;
    computerImage.src = rockImage;
    lostResult();
  }
  if (computerChoice() === 1) {
    phraseResult.textContent = 'Computer chose Paper. You won!';
    userImage.src = scissorsImage;
    computerImage.src = paperImage;
    wonResult();
  }
  if (computerChoice() === 2) {
    phraseResult.textContent = "Computer chose Scissors. It's a draw";
    userImage.src = scissorsImage;
    computerImage.src = scissorsImage;
  }
});
