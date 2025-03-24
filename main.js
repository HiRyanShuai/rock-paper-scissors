console.log("Hello world!");

function getComputerChoice () {
    let choiceIndex = Math.floor( Math.random() * 100 ) % 3;
    let choice = ["rock", "paper", "scissors"];
    return choice[choiceIndex];

}

console.log( getComputerChoice() );