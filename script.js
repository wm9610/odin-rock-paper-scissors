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

// function playRound(playerSelection, computerSelection) {
//     let result;
//     if(playerSelection === computerSelection) {
//         result = "Tie!";
//     } 
//     else {
//         switch (playerSelection) {
//             case 'Rock': 
//             result = (computerSelection === 'Scissors') ? `You Win! ${playerSelection} beats ${computerSelection}` 
//             : `You Lose! ${computerSelection} beats ${playerSelection}`;
//             case 'Paper': 
//             result = (computerSelection === 'Rock') ? `You Win! ${playerSelection} beats ${computerSelection}` 
//             : `You Lose! ${computerSelection} beats ${playerSelection}`;
//             case 'Scissors': 
//             result = (computerSelection === 'Paper') ? `You Win! ${playerSelection} beats ${computerSelection}` 
//             : `You Lose! ${computerSelection} beats ${playerSelection}`;
//         }
//     }
//     return result.includes("win") ? [result, 1] : [result, 0];
// }

function playRound(e) 
{
    let playerSelection = e.target.value;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    if(playerSelection === computerSelection) {
        result = "Tie!";
    } 
    else {
        switch (playerSelection) {
            case 'Rock': 
                if(computerSelection === 'Scissors') {
                    result = `You Win! ${playerSelection} beats ${computerSelection}`;
                    isPlayerWin(true);
                }
                else { 
                    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                    isPlayerWin(false);
                }
                break;
            case 'Paper': 
                if(computerSelection === 'Rock') {
                    result = `You Win! ${playerSelection} beats ${computerSelection}`;
                    isPlayerWin(true);
                }
                else { 
                    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                    isPlayerWin(false);
            
                }
                break;
            case 'Scissors': 
                if(computerSelection === 'Paper') {
                    result = `You Win! ${playerSelection} beats ${computerSelection}`;
                    isPlayerWin(true);
                }
                else { 
                    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                    isPlayerWin(false);
                }
                break;
        }
    }
    display.textContent = result;
}

function isPlayerWin(value) {

    console.log(value);
    value ? playerScore++ : computerScore++;
    if(playerScore === 5) {
        result = "Player Win!"
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5) {
        result = "Computer Win!"
        playerScore = 0;
        computerScore = 0;
    }
    runningScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    // return result;
}



// function game() {
//     let score = 0;
//     let resultOfTheRound;
//     let winner;
//     for(let i = 0; i < 6; i++) {
//         let playerSelection = capitalize(prompt("Please enter your choice:").toLowerCase());
//         resultOfTheRound = playRound(playerSelection, computerPlay());
//         score = score + resultOfTheRound[1];
//         console.log(resultOfTheRound[0]);
//         console.log(score);
//     }
//     if(score >= 3) {
//         winner = 'Player';
//     }
//     else {
//         winner = 'Computer';
//     }
//     return winner;
// }

const setChoice = function (e) {
    console.log(e.target.value);
}

let playerScore = 0;
let computerScore = 0;
let result = "";
const display = document.querySelector("#display-result");
let runningScore = document.createElement('p');
runningScore.classList.add('text-light', 'h1');
display.parentNode.insertBefore(runningScore, display);
runningScore.textContent = "Player: 0 | Computer: 0";


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', playRound));

