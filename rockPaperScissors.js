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