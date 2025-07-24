

function forComputer(compChoice){
    floorNumber = Math.floor(Math.random() * 3) + 1;
    compChoice = floorNumber;
    //console.log(compChoice)
    if(compChoice == 1){
        compChoice = "Rock";
        console.log(compChoice)
        return compChoice;

    }else if(compChoice == 2){
        compChoice = "Paper";
        console.log(compChoice)
        return compChoice;

    }else if( compChoice == 3){
        compChoice = "Scissors";
        console.log(compChoice)
        return compChoice;
    }

    

}

/* ############### FOR SPACE ############ */
/* ############### FOR SPACE ############ */
function forUser(userChoice){
    thePrompt = prompt("Rock, Paper or Scissor");
    promptWord = thePrompt.charAt(0);
    promptWord = promptWord.toUpperCase();
    restOfWords = thePrompt.slice(1);
    restOfWords = restOfWords.toLowerCase();
    userChoice = promptWord + restOfWords;
    console.log(userChoice)
    return userChoice;
}
/* ############### FOR SPACE ############ */
/* ############### FOR SPACE ############ */
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    /* ############### FOR SPACE ############ */
    /* ############### FOR SPACE ############ */
    for(let theRound = 0; theRound < 5; theRound +1){
        let computerSelection = forComputer();
        let  humanSelection = forUser();
         /* ############### FOR SPACE ############ */
        /* ############### FOR SPACE ############ */
        function playRound(computerChoice , humanChoice){
            if(computerChoice == humanChoice){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - This is a tie.`);
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(computerChoice == "Rock" && humanChoice == "Scissors"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Rock bests Scissors so Computer wins this round.`);
                computerScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(computerChoice == "Paper" && humanChoice == "Rock"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Paper beats Rock so Computer wins this round.`);
                computerScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(computerChoice == "Scissors" && humanChoice == "Paper"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Scissors beats Paper so Computer wins this round.`);
                computerScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Rock bests Scissors so You win this round.`);
                humanScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(humanChoice == "Paper" && computerChoice == "Rock"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Paper beats Rock so You win this round.`);
                humanScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
                console.log(`The Computer chose ${computerChoice} and You chose ${humanChoice} - Scissors beats Paper so You win this round.`);
                humanScore +=1;
                console.log(`Computer Score ${computerScore}`);
                console.log(`Your Score ${humanScore}`);

            };
            /* ############### FOR SPACE ############ */
            if(humanChoice){
                let userWord = humanChoice.charAt(0);
                userWord = userWord.toUpperCase();
                let remWords = humanChoice.slice(1);
                remWords = remWords.toLowerCase();
                return userWord + remWords;

            };

            gameRounds -= 1;
            

        }
        playRound(computerSelection , humanSelection);
        /* ############### FOR SPACE ############ */
        console.log(theRound +=1);

    }

    if(theRound = 5){
        console.log("The Game is now Over. Final Tally:")
        if(computerScore == humanScore){
            console.log(`Computer scored ${computerScore} and You scored ${humanScore}. Game is a tie. `);

        }else if(computerScore > humanScore){
            console.log(`Computer scored ${computerScore} and You scored ${humanScore}. The Computer won.`)

        }else if(computerScore < humanScore){
             console.log(`Computer scored ${computerScore} and You scored ${humanScore}. You won. YAY!!`)
        }
    }
    
}

playGame()
