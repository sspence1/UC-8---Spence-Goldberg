// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var scoreMatch = [0,0,0];
var scoreTotal = [0,0,0];
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
var playerChoice;
var computerChoice;

function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    } else if (playerChoice == 0 && computerChoice == 2 || playerChoice == 0 && computerChoice == 3) {
        // Rock beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 1 && computerChoice == 0 || playerChoice == 1 && computerChoice == 4 ) {
        // Paper beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 2 && computerChoice == 1 || playerChoice == 2 && computerChoice == 3) {
        // Scissors beats paper - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 3 && computerChoice == 4 || playerChoice == 3 && computerChoice == 1) {
        // Lizard Wins
        console.log("win");
        return 1;
    } else if (playerChoice == 4 && computerChoice == 2 || playerChoice == 4 && computerChoice == 0) {
        // Spock Wins
        console.log("Win");
        return 1;

    } else {
        // All other combinations are lossess
        console.log("lose");
        return -1;
    }
}

function displayMatchScoreBoard(matchWinsId, matchLossesId, matchTiesId) {
    document.getElementById(matchWinsId).innerHTML = scoreMatch[0];
    document.getElementById(matchLossesId).innerHTML = scoreMatch[2];
    document.getElementById(matchTiesId).innerHTML = scoreMatch[1];
}

function displayTotalScoreBoard(totalWinsId, totalLossesId) {
    document.getElementById(totalWinsId).innerHTML = scoreTotal[0];
    document.getElementById(totalLossesId).innerHTML = scoreTotal[2];
    
}



function updateMatchScore(val){
    ++scoreMatch[val];
     if (scoreMatch[0] == 2) {
         ++scoreTotal[0];
         scoreMatch = [0,0,0];
     } else if (scoreMatch[2] == 2) {
        ++scoreTotal[2];
        scoreMatch = [0,0,0];
    }

    console.log("The match score is now " + scoreMatch);
    console.log("The total score is now " + scoreTotal);
}

/*
function updateTotalScore(val){
    if (scoreMatch[0] == 2 || scoreMatch[1] == 2) {
        ++scoreTotal[val];
    }
    console.log("The total score is now " + scoreTotal);
}
*/
function displayGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateMatchScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        updateMatchScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        updateMatchScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}


function displayTotalGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    // Now play the game and store the result
    var result = playGame();
   
    if (result == 1) {
        // Display that it was a win
        updateTotalScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        updateTotalScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        updateTotalScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}


function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computerChoice);
}

