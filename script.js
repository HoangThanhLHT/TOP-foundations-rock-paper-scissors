function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3
    console.log(choice)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

console.log(getComputerChoice())