////// get computer's choice and player's choice/////
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?", "");
    return playerChoice.toLowerCase();
}


////// get computer's choice and player's choice/////

////// play one round/////
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Lose";
        } else if (computerSelection === "scissors") {
            return "Win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Lose";
        } else if (computerSelection === "rock") {
            return "Win";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Lose";
        } else if (computerSelection === "paper") {
            return "Win";
        }
    }
}
////// play one round/////

////// play five rounds/////
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i=0; i<5; i++) {
        let result = playRound();
        if (result === "Tie") {
            computerScore++;
            playerScore++;
            console.log("Tie");
            console.log("Player: " + playerScore + ", " + "Computer: " + computerScore + " ");
        } else if (result === "Lose") {
            computerScore++;
            console.log("Sorry");
            console.log("Player: " + playerScore + ", " + "Computer: " + computerScore + " ");
        } else if (result === "Win") {
            playerScore++;
            console.log("Congrats");
            console.log("Player: " + playerScore + ", " + "Computer: " + computerScore + " ");
        }
    }
}

function playGame() {
    game();
    if (playerScore > computerScore) {
        console.log("You win this game!");
    } else if (playerScore < computerScore) {
        console.log("You're a loser in this game!");
    }
}

playGame();