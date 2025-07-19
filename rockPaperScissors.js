function forComputerPrompt(compPrompt){
    const weRandoNum = Math.random() * 3;
    const weFloorNum = Math.floor(weRandoNum) + 1;
    compPrompt = weFloorNum;
    return compPrompt

}
console.log(forComputerPrompt())


function getComputerChoice(computerChoice){


    if(forComputerPrompt() === 1){
       computerChoice = "Rock";
       return computerChoice;

    } else if(forComputerPrompt() === 2){
        computerChoice = "Paper";
        return computerChoice;

    } else if(forComputerPrompt() === 3){
        computerChoice = "Scissors";
        return computerChoice;

    }

}

console.log(getComputerChoice());


const userPrompt = Number(prompt("Enter a Number ranging from 1 to 3.")); 
    //console.log(typeof userPrompt) //to check if this is the correct type.
    // console.log(userPrompt) // to confirm number being outputted to console. Can be commented out on project completion


function getHumanChoice(userChoice){
    
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


function playRound(forHumanChoice , forComputerChoice){
    forComputerChoice = getComputerChoice();
    forHumanChoice = getHumanChoice();

    if(forComputerPrompt() == userPrompt){
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. This is a draw.`

    } else if(forComputerPrompt() == 1 && userPrompt == 3){
        computerScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. The Computer Wins.`

    }else if(forComputerPrompt()== 1 && weFloorNum == 3){
        humanScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. YAY You Win.`

    }else if(forComputerPrompt() == 2 && userPrompt ==1){
        computerScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. The Computer Wins.`

    } else if(forComputerPrompt() == 2 && weFloorNum == 1){
        humanScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. YAY You Win.`

    } else if(forComputerPrompt() == 3 && userPrompt == 2){
        computerScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. The Computer Wins.`

    } else if(forComputerPrompt() == 3 && weFloorNum == 2){
        humanScore ++;
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
        return `The Computer chose ${forComputerChoice} and you chose ${forHumanChoice}. YAY You Win.`
    }

    
}
console.log(playRound())

function playGame(){}

