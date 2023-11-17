let numIncorrect = 0

function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1; /*How this works - multiply by the number of options you want and add one*/
    if (random === 1) {
        return computerSelection = "rock"; /*if defining constant computerSelection = getComputerChoice(), can't return computerSelection = ... here*/
    } else if (random === 2) {
        return computerSelection = "paper";
    } else if (random === 3) {
        return computerSelection = "scissors";
    }
}


function playRound() { /*can't have anything inside () if using parameters (arguments?) from another function!*/
    let playerSelectionAdjusted = playerSelection.toLowerCase();
    if (playerSelectionAdjusted === computerSelection) {
        alert("It's a Draw! You're on the same wavelength!"); /*if just returning (while testing) don't use return = ..., returns error as expects an expression */
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "paper") {
        alert("You lose... that paper is stronger than your rock??");
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "scissors") {
        alert("You win!! Those scissors got demolished by your rock!");
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "rock") {
        alert("You lose... yeah your scissors stook no chance against that rock");
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "paper") {
        alert("You win! Cut up that paper prettily with your scissors");
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "scissors") {
        alert("You lose... ouch your paper got cut by those scissors");
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "rock") {
        alert("You win! Don't question how your paper beats rock okay");
    } else {
        alert("Huh, that's not a rock, paper or scissors... try again");
        retryInput();
        numIncorrect = 0;
    }
}

function getPlayerChoice() {
    return playerSelection = prompt("Choose your weapon! Rock, paper or scissors",""); /* need to have prompt equating to return playerSelection to work properly */
}

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        if (playerSelection === null) {
            alert("Sorry to see you go");
            break;
        } getComputerChoice();
        playRound();
        }
    }


function retryInput () {
    if (numIncorrect < 2) {
        numIncorrect++;
        getPlayerChoice();
        getComputerChoice();
        playRound();
    } else {
        alert("You forfeit this round");
    }
}