function computerPlay(){
    let arrayOfSelection = ['Rock', 'Paper', 'Scissors'];
    // returns a random integer from 0 to 2
    let i = Math.floor(Math.random() * 3)
    return arrayOfSelection[i];
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

// function playRound(playerSelection, computerSelection) {

//     if(playerSelection === computerSelection) {
//         return "Tie!";
//     } 
//     else {
//         switch (playerSelection) {
//             case 'Rock': 
//             return (computerSelection === 'Scissors') ? `You Win! ${playerSelection} beats ${computerSelection}` :
//             `You Lose! ${computerSelection} beats ${playerSelection}`;
//             case 'Paper': 
//             return (computerSelection === 'Rock') ? `You Win! ${playerSelection} beats ${computerSelection}` :
//             `You Lose! ${computerSelection} beats ${playerSelection}`;
//             case 'Scissors': 
//             return (computerSelection === 'Paper') ? `You Win! ${playerSelection} beats ${computerSelection}` :
//             `You Lose! ${computerSelection} beats ${playerSelection}`;
//         }
//     }
// }

function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection) {
        result = "Tie!";
    } 
    else {
        switch (playerSelection) {
            case 'Rock': 
            result = (computerSelection === 'Scissors') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'Paper': 
            result = (computerSelection === 'Rock') ? `You Win! ${playerSelection} beats ${computerSelection}` 
            : `You Lose! ${computerSelection} beats ${playerSelection}`;
            case 'Scissors': 
            result = (computerSelection === 'Paper') ? `You Win! ${playerSelection} beats ${computerSelection}` 
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
        let playerSelection = capitalize(prompt("Please enter your choice:").toLowerCase());
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

// console.log('Winner is ' + game());

// console.log(computerPlay());

// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
