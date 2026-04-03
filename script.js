function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return "rock";
    }
    else if (choice == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(computerChoice);

    if ((humanChoice == "paper") & (computerChoice == "rock")) {
        console.log("You won! Paper beats Rock");
        humanScore += 1;
    }
    else if ((humanChoice == "paper") && (computerChoice == "paper")) {
        console.log("It's a tie!");
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissor")) {
        console.log("You lose! Scissor beats Paper");
        computerScore += 1;
    }
    else if ((humanChoice == "rock") && (computerChoice == "rock")) {
        console.log("It's a tie!");
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissor")) {
        console.log("You won! Rock beats Scissor");
        humanScore += 1;
    }
    else if ((humanChoice == "scissor") && (computerChoice == "rock")) {
        console.log("You lose! Rock beats Scissor");
        computerScore += 1;
    }
    else if ((humanChoice == "scissor") && (computerChoice == "paper")) {
        console.log("You won! Scissor beats Paper");
        humanScore += 1;
    }
    else if ((humanChoice == "scissor") && (computerChoice == "scissor")) {
        console.log("It's a tie!");
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`${humanScore}, ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();