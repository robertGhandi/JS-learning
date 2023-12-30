//play rock_paper_scissors in the terminal
const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
    const playerChoice = prompt("Enter rock, paper or scissors. Enter q to quit: ").toLowerCase();
    
    if (playerChoice.toLowerCase() === "q") {
        break;
    }

    if (playerChoice !== "rock" && 
        playerChoice !== "paper" && 
        playerChoice !== "scissors") {
        console.log("Please enter a valid playerChoice.");
        continue;
    }

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    console.log("The computer chose:", computerChoice);

    if (computerChoice === playerChoice) {
        console.log("Draw!");
        ties++
    } else if (playerChoice === "paper" && computerChoice === "rock" ) {
        console.log("You Won!");
        wins++
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You Won!");
        wins++
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Won!");
    } else {
        console.log("You lost");
        losses++
    }
}

console.log("Wins:", wins, "Losses:",losses, "Draws:", ties);