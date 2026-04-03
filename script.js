function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice == 1) {
        return "Rock"
    }
    else if (choice == 2) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}

function getHumanChoice() {
    choice = prompt("Enter your choice: ")
    return choice
}

let humanScore = 0;
let computerScore = 0;