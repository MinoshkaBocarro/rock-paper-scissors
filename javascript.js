function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1;
    if (random === 1) {
        return "rock"; 
    } else if (random === 2) {
        return "paper";
    } else if (random === 3) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionAdjusted = playerSelection.toLowerCase();
    if (playerSelectionAdjusted === computerSelection) {
        return("It's a Draw! You're on the same wavelength!") /*if just returning (while testing) don't use return = ..., returns error as expects an expression */
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "paper") {
        return("You lose... that paper is stronger than your rock??")
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "scissors") {
        return("You win!! Those scissors got demolished by your rock!")
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "rock") {
        return("You lose... yeah your scissors stook no chance against that rock")
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "paper") {
        return("You win! Cut up that paper prettily with your scissors")
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "scissors") {
        return("You lose... ouch your paper got cut by those scissors")
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "rock") {
        return("You win! Don't question how your paper beats rock okay")
    }
}