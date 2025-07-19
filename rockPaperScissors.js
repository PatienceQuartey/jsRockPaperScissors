function getComputerChoice(computerChoice){
    let weRandoNum = Math.random() * 3;
    let weFloorNum = Math.floor(weRandoNum) + 1;
    console.log(weFloorNum); // to confirm number number being outputted can be commented out on project completion

    if(weFloorNum === 1){
       computerChoice = "Rock";
       return computerChoice;

    } else if(weFloorNum === 2){
        computerChoice = "Paper";
        return computerChoice;

    } else if(weFloorNum === 3){
        computerChoice = "Scissors";
        return computerChoice;

    }

}

console.log(getComputerChoice());



function getHumanChoice(userChoice){
    const userPrompt = Number(prompt("Enter a Number ranging from 1 to 3.")); 
    //console.log(typeof userPrompt) //to check if this is the correct type.
    console.log(userPrompt) // to confirm number being outputted to console. Can be commented out on project completion

    if(userPrompt === 1){
        userChoice = "Rock";
        return userChoice;

    } else if(userPrompt === 2){
        userChoice = "Paper";
        return userChoice;

    } else if(userPrompt === 3){
        userChoice = "Scissors";
        return userChoice;
        
    }


}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice , computerChoice){};
