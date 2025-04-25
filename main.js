function getComputerChoice(){
    let choiceIndex = Math.floor( Math.random() * 100 ) % 3;
    let choice = ["rock", "paper", "scissors"];
    return choice[choiceIndex];
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let outputText = '';
        if(humanChoice===computerChoice){
            outputText += `Draw! ${humanChoice} vs ${computerChoice}`;
        }else if(
            humanChoice==="rock" && computerChoice==="scissors" || 
            humanChoice==="scissors" && computerChoice==="paper" ||
            humanChoice==="paper" && computerChoice==="rock"
        ){
            humanScore++;
            outputText += `You win! ${humanChoice}(you) beats ${computerChoice}(computer)`;
        }else{
            computerScore++;
            outputText += `You lose! ${computerChoice}(computer) beats ${humanChoice}(you)`;
        }
        outputText += `<br>Score: You = ${humanScore}  Computer = ${computerScore}`;
        return outputText + '<br>';
    }

    const buttons = document.querySelectorAll('button');
    const output = document.querySelector('#showtext');

    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            output.innerHTML += playRound(button.id,getComputerChoice());
            if(humanScore === 5){
                output.innerHTML += '<br>===================<br>Final Result: You Win!!! <br>===================<br><br>';
                humanScore = computerScore = 0;
            }else if(computerScore === 5){
                output.innerHTML += '<br>===================<br>Final Result: You Lose!!! <br>===================<br><br>';
                humanScore = computerScore = 0;
            }
            return;
        });
    }); 

    return;
}

playGame();