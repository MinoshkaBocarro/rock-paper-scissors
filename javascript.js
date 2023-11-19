function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1;
    if (random === 1) {
        return computerSelection = "rock";
    } else if (random === 2) {
        return computerSelection = "paper";
    } else if (random === 3) {
        return computerSelection = "scissors";
    }
}


function playRound() { 
    if (playerSelection === computerSelection) {
        alert("It's a Draw! You're on the same wavelength!"); 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose... that paper is stronger than your rock??");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win!! Those scissors got demolished by your rock!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose... yeah your scissors stook no chance against that rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Cut up that paper prettily with your scissors");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose... ouch your paper got cut by those scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Don't question how your paper beats rock okay");
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="rock");
});

paper.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="paper");
});

scissors.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="scissors");
});