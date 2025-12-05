function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("Enter your choice: ")
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        console.log(humanChoice)
        
        let announcement = "win"

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
        }

        if (announcement == "win") {
            humanScore++
        }

        if (announcement == "lose") {
            computerScore++
        }

        console.log(`You (${humanChoice}) > ${announcement}! < Computer (${computerChoice})`)
        console.log(`Your score: ${humanScore} --------------- Computer score: ${computerScore}`)
    }


}

playGame()