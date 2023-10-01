function getComputerChoice(){

let comproll = Math.floor(Math.random()*3);
let compchoice;

if (comproll == 0) compchoice = "scissors";
else if (comproll == 1) compchoice = "rock";
else compchoice = "paper";
return compchoice;
}

function gameRound(playerSelection,computerSelection){
    let pc = ("You chose "+playerSelection+".\n")
    let cc = ("The computer chose "+computerSelection+".\n")
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

    return pc + cc + result


}

function game(){
    let rounds = 0
    while (rounds < 5){
        console.log("Round " + (rounds + 1) + "!")
        let pc = prompt('Enter "paper","rock" or "scissors."');
        pc = pc.toLowerCase();
        while  (pc != "paper" && pc != "rock" && pc != "scissors") pc = prompt("Invalid choice. Please try again.");
        let cc = getComputerChoice();
        console.log(gameRound(pc,cc))
        console.log("You have won "+wins+" games.")
        rounds++
    }
    console.log("Good game!")
}

let wins = 0
game()