function getComputerChoice(){
    let choiceIndex = Math.floor( Math.random() * 100 ) % 3;
    let choice = ["rock", "paper", "scissors"];
    return choice[choiceIndex];

}

function getHumanChoice(){
    return prompt("Input your choice: rock, paper or scissors?");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice===computerChoice){
            console.log("Draw! " + humanChoice + " vs " + computerChoice);
        }else if(
            humanChoice==="rock" && computerChoice==="scissors" || 
            humanChoice==="scissors" && computerChoice==="paper" ||
            humanChoice==="paper" && computerChoice==="rock"
        ){
            console.log("You win! " + humanChoice + "(you) beats " + computerChoice + "(computer)");
            humanScore++;
        }else{
            console.log("You lose! " + computerChoice + "(computer) beats " + humanChoice + "(you)");
            computerScore++;
        }
        console.log("Score: You = " + humanScore + "  Computer = " + computerScore);
        return;
    }    
    for(let i = 1; i < 6; i++){
        console.log("Round "+i);
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("==== Final result ====")
    console.log("You = " + humanScore + "  Computer = " + computerScore);
    if(humanScore > computerScore){
        console.log("You win!");
    }else if(humanScore === computerScore){
        console.log("Draw!");
    }else{
        console.log("You lose!");
    }
    return;
}

playGame();