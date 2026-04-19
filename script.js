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
    console.log(`Computer choose: ${computerChoice}`);

    const result = document.querySelector("#results");

    if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log(`Computer chosed: ${computerChoice}. You won! Paper beats Rock`);
        humanScore += 1;
        const para = document.createElement('p');
        para.textContent = `Computer chosed: ${computerChoice}. You won! Paper beats Rock`
        result.appendChild(para)
    }
    else if ((humanChoice == "paper") && (computerChoice == "paper")) {
        console.log(`Computer chosed: ${computerChoice}. It's a tie!`);
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. It's a tie!`
        result.appendChild(para)
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissor")) {
        console.log(`Computer chosed: ${computerChoice}. You lose! Scissor beats Paper`);
        computerScore += 1;
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. You lose! Scissor beats Paper`
        result.appendChild(para)
    }
    else if ((humanChoice == "rock") && (computerChoice == "rock")) {
        console.log(`Computer chosed: ${computerChoice}. It's a tie!`);
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. It's a tie!`
        result.appendChild(para)
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log(`Computer chosed: ${computerChoice}. You lose! Paper beats Rock`);
        computerScore += 1;
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. You lose! Paper beats Rock`
        result.appendChild(para)
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissor")) {
        console.log(`Computer chosed: ${computerChoice}. You won! Rock beats Scissor`);
        humanScore += 1;
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. You won! Rock beats Scissor`
        result.appendChild(para)
    }
    else if ((humanChoice == "scissor") && (computerChoice == "rock")) {
        console.log("You lose! Rock beats Scissor");
        computerScore += 1;
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. You lose! Rock beats Scissor`
        result.appendChild(para)
    }
    else if ((humanChoice == "scissor") && (computerChoice == "paper")) {
        console.log(`Computer chosed: ${computerChoice}. You won! Scissor beats Paper`);
        humanScore += 1;
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. You won! Scissor beats Paper`
        result.appendChild(para)
    }
    else if ((humanChoice == "scissor") && (computerChoice == "scissor")) {
        console.log(`Computer chosed: ${computerChoice}.  It's a tie!`);
        const para = document.createElement("p");
        para.textContent = `Computer chosed: ${computerChoice}. It's a tie!`
        result.appendChild(para)
    }

    if ((humanScore == 5) ||  (computerScore==5)) {
        const para = document.createElement('p');
        para.textContent = `Game has ended`
        result.appendChild(para)
        if (humanScore > computerScore) {
            const para = document.createElement('p');
            para.textContent = `You have won the game by ${humanScore}-${computerScore} 🏆🎉`
            result.appendChild(para)
        }
        else if (humanScore < computerScore) {
            const para = document.createElement('p');
            para.textContent = `You have lost the game!, Computer have won by ${computerScore}-${humanScore} 😢`
            result.appendChild(para)
        }
        else {
            const para = document.createElement('p');
            para.textContent = `It's a tie! ${humanScore}-${computerScore}  🤝`
            result.appendChild(para)
        }
        const btn = document.createElement("button");
        btn.id = "clear_game";
        btn.textContent = "Play Again";
        result.appendChild(btn);

        btn.addEventListener("click", function() {
            const results = document.getElementById("results");
            results.querySelectorAll("p").forEach(p => p.remove());
            this.remove();
        })
        humanScore = 0;
        computerScore = 0;
    }
}

const container = document.querySelector("#buttons");

container.addEventListener("click", (e) => {
  const choice = e.target.id;

  switch (choice) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;

    case "paper":
      playRound("paper", getComputerChoice());
      break;

    case "scissor":
      playRound("scissor", getComputerChoice());
      break;
  }


});