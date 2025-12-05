function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3;
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    };
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const results = document.querySelector("div");

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        let announcement = "win";

        if (humanChoice == computerChoice) {
            announcement = "tie"
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            announcement = "lose"
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            announcement = "lose"
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            announcement = "lose"
        };

        if (announcement == "win") {
            humanScore++
        };

        if (announcement == "lose") {
            computerScore++
        };

        const result = document.createElement("p");
        result.textContent = `${announcement}! You (${humanChoice}) > ${humanScore} : ${computerScore} < Computer (${computerChoice})`;
        results.appendChild(result)
    };

    function announceWinner(name) {
        const winner = document.createElement("p");
        winner.textContent = `The winner is ${name}!`;
        results.appendChild(winner);
    }

    const selections = document.querySelectorAll("button");

    selections.forEach((selection) => {
        selection.addEventListener("click", () => {
            playRound(selection.textContent, getComputerChoice());
            if (humanScore == 5 || computerScore == 5) {
                (humanScore == 5) ? announceWinner("You") : announceWinner("Computer");
                humanScore = 0;
                computerScore = 0;
            };
        });
    });
};

playGame();