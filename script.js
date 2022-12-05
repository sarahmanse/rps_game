let playerScore = 0;
let computerScore = 0;

function game() {
  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorsBtn = document.querySelector('#scissors');

  const playerOptions = [rockBtn,paperBtn,scissorsBtn];

  if(playerScore < 5 && computerScore < 5){
    playerOptions.forEach(option => {
      option.addEventListener('click', function() {
        const options = ['rock','paper','scissors'];
        const computerSelection = options[Math.floor(Math.random()*3)];
        playRound(this.innerText, computerSelection);
      })
    })
  }
  else {
    gameOver();
  }
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

function gameOver() {
  const chooseWeapon = document.querySelector('.chooseWeapon');
  const result = document.querySelector('.winner');
  const reloadBtn = document.querySelector('.reload');

  playerOptions.forEach(option => {
    option.style.display = none;
  })

  chooseWeapon.innerText = 'Game Over!';

  if(playerScore > computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Won The Game'
    result.style.color = '#308D46';
  }
  else if(playerScore < computerScore){
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game';
      result.style.color = 'red';
  }
  else{
      result.style.fontSize = '2rem';
      result.innerText = 'Tie';
      result.style.color = 'grey'
  }

  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click',() => {
      window.location.reload();
  })
}

game();