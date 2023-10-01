let input = ""
const paper = document.querySelector('#paper')
const scissors = document.querySelector ('#scissors')
const rock = document.querySelector('#rock')
const result = document.querySelector('#resultbox')
const pch = document.querySelector('#playerchoice')
const cch = document.querySelector('#computerchoice')

function getComputerChoice(){

let comproll = Math.floor(Math.random()*3);
let compchoice;

if (comproll == 0) compchoice = "scissors";
else if (comproll == 1) compchoice = "rock";
else compchoice = "paper";
return compchoice;
}

function gameRound(playerSelection){
    let computerSelection = getComputerChoice()
    pch.textContent = playerSelection.toUpperCase()
    cch.textContent = computerSelection.toUpperCase()
    let result

    if (playerSelection == computerSelection) result = ("TIE!")
    else if (playerSelection == "paper" && computerSelection == "scissors" || 
             playerSelection == "rock" && computerSelection == "paper" || 
             playerSelection == "scissors" && computerSelection == "rock") 
             result = "You Lose!"
    else {
        result = "You Win!"
        wins++
    }

    return result


}

function game(){

    paper.addEventListener('click', () => {
        input = "paper";
        console.log(gameRound(input))
        progress()
    });
    scissors.addEventListener('click', () => {
        input = "scissors";
        console.log(gameRound(input))
        progress()
    });
    rock.addEventListener('click', () => {
        input = "rock";
        console.log(gameRound(input))
        progress()
    });

    console.log("Round " + (rounds + 1) + "!")
}

function progress(){
    console.log("You have won "+wins+" games.")
    rounds++
    if (rounds < 5){
        console.log("Round " + (rounds + 1) + "!")
    }
    else {
        console.log("Good game!");
        paper.remove();
        rock.remove();
        scissors.remove();
    }
}
let rounds = 0
let wins = 0

game()

