function computerPlay(){
    let arrayOfSelection = ['ROCK', 'PAPER', 'SCISSORS'];
    // returns a random integer from 0 to 2
    let i = Math.floor(Math.random() * 3)
    return arrayOfSelection[i];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return "Tie!";
    } 
    else {
        switch (playerSelection) {
            case 'ROCK': 
            return (computerSelection === 'SCISSORS') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'PAPER': 
            return (computerSelection === 'ROCK') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'SCISSORS': 
            return (computerSelection === 'PAPER') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection) {
        result = "Tie!";
    } 
    else {
        switch (playerSelection) {
            case 'ROCK': 
            result = (computerSelection === 'SCISSORS') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'PAPER': 
            result = (computerSelection === 'ROCK') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'SCISSORS': 
            result = (computerSelection === 'PAPER') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    return result.includes("win") ? [result, 1] : [result, 0];
}

function game() {
    let score = 0;
    let resultOfTheRound;
    let winner;
    for(let i = 0; i < 6; i++) {
        let playerSelection = prompt("Please enter your choice:").toUpperCase();
        resultOfTheRound = playRound(playerSelection, computerPlay());
        score = score + resultOfTheRound[1];
        console.log(resultOfTheRound[0]);
        console.log(score);
    }
    if(score >= 3) {
        winner = 'Player';
    }
    else {
        winner = 'Computer';
    }
    return winner;
}

console.log('Winner is ' + game());

// console.log(computerPlay());

// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
