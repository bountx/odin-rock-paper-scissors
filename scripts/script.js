let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock';
        } else {
            return 'You win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats Paper';
        } else {
            return 'You win! Paper beats Rock';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors';
        } else {
            return 'You win! Scissors beats Paper';
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        const resultDiv = document.querySelector('.result');
        resultDiv.textContent = result;

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
        
        const scoreDiv = document.querySelector('.score');
        scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

        if (playerScore === 5) {
            resultDiv.textContent = 'You win the game!';
            buttons.forEach((button) => {
                button.disabled = true;
            });
        }
        if (computerScore === 5) {
            resultDiv.textContent = 'You lose the game!';
            buttons.forEach((button) => {
                button.disabled = true;
            });
        }
    });
});