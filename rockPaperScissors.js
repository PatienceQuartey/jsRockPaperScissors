function getComputerChoice(number){
    let weRandoNum = Math.random() * 3;
    let weFloorNum = Math.floor(weRandoNum) + 1
    console.log(weFloorNum)

}

getComputerChoice();



function getHumanChoice(userChoice){
    const userPrompt = Number(prompt("Enter a Numnber ranging from 1 to 3.")) 
    //console.log(typeof userPrompt) //to check if this is the correct type.
    console.log(userPrompt) 

    if(userPrompt === 1){
        userChoice = "Rock"
        return userChoice
    } else if(userPrompt === 2){
        userChoice = "Paper"
        return userChoice
    } else if(userPrompt === 3){
        userChoice = "Scissors"
        return userChoice
    }


}
console.log(getHumanChoice())