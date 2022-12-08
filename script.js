let playerScore = 0;
let computerScore = 0;

function game() {
  playerScore = 0;
  computerScore = 0;
  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorsBtn = document.querySelector('#scissors');

  const playerOptions = [rockBtn,paperBtn,scissorsBtn];

  playerOptions.forEach(option => {
    option.addEventListener('click', function() {
      const options = ['rock','paper','scissors'];
      const computerSelection = options[Math.floor(Math.random()*3)];
      playRound(this.innerText, computerSelection);
      if (playerScore > 4 || computerScore > 4) {
        gameOver(playerOptions);
      }
    })
  })
}

function playRound(playerSelection, computerSelection) {
  const result = document.querySelector('.winner');
  const playerScoreBoard = document.querySelector('.pScore');
  const computerScoreBoard = document.querySelector('.cScore');
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection== "scissors" && computerSelection == "rock"
    ) {
    computerScore++;
    result.textContent = "Computer won!";
    computerScoreBoard.textContent = computerScore;
  }
  else {
    playerScore++;
    result.textContent = "You won!";
    playerScoreBoard.textContent = playerScore;
  }
}

function gameOver(playerOptions) {
  const chooseWeapon = document.querySelector('.chooseWeapon');
  const result = document.querySelector('.winner');
  const reloadBtn = document.querySelector('.reload');

  playerOptions.forEach(option => {
    option.style.display = 'none';
  })

  chooseWeapon.innerText = 'Game Over!';

  if(playerScore > computerScore){
    result.style.fontSize = '4rem';
    result.innerText = 'You won the game!!'
  }
  else {
      result.style.fontSize = '4rem';
      result.innerText = 'You lost the game :(';
  }

  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex';
  reloadBtn.addEventListener('click',() => {
      window.location.reload();
  })
}

game();