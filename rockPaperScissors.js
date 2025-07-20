function getComputerChoice(computerChoice){
    theFlooredNumber = Math.floor(Math.random() * 3) + 1;
    computerChoice = theFlooredNumber;

    if( computerChoice == 1){
        computerChoice = "Rock";
        return computerChoice;

    }else if(computerChoice == 2){
        computerChoice = "Paper";
        return computerChoice;

    }else if(computerChoice == 3){
        computerChoice = "Scissors";
        return computerChoice;

    }

    return computerChoice;
}

console.log(getComputerChoice())

function getHumanChoice(userChoice){
    userPrompt= prompt("Welcome to Rock, Paper, Scissors. To start the game, type in 'Rock', 'Paper' or 'Scissors in the box below: ");
    userChoice = userPrompt;
    userWord = userChoice.charAt(0);
    userWord = userWord.toUpperCase();
    remUserWords = userChoice.slice(1);
    remUserWords = remUserWords.toLowerCase();
    console.log(userWord + remUserWords);
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;
