const outputText = document.getElementById("output-text");
const playerChoice = document.getElementById("player-choice");
const compChoice = document.getElementById("comp-choice");
const playerDiv = document.getElementById("player-div");
const compDiv = document.getElementById("comp-div");
const playerScoreTag = document.getElementById("player-score-tag");
const compScoreTag = document.getElementById("comp-score-tag");
const popUpContainer = document.getElementById("pop-up-container");
const content = document.getElementById("content");
const popUpText = document.getElementById("pop-up-text");
const sectionOne = document.getElementById("section-one");
const flexItemTwo = document.getElementsByClassName("flex-item-two");

let playerScore = 0;
let compScore = 0;

if (this.window.innerWidth < 600) {
    sectionOne.style.margin = "10px";
    for (let i = 0; i < flexItemTwo.length; i++) {
        flexItemTwo[i].children[0].style.width = "75%";
    }
} else {
    sectionOne.setAttribute("style", "margin: 2% 10% 0% 10%;");
    for (let i = 0; i < flexItemTwo.length; i++) {
        flexItemTwo[i].children[0].style.width = "50%";
    }
}

window.addEventListener("resize", function () {
    if (this.window.innerWidth < 600) {
        sectionOne.style.margin = "10px";
        for (let i = 0; i < flexItemTwo.length; i++) {
            flexItemTwo[i].children[0].style.width = "75%";
        }
    } else {
        sectionOne.setAttribute("style", "margin: 2% 10% 0% 10%;");
        for (let i = 0; i < flexItemTwo.length; i++) {
            flexItemTwo[i].children[0].style.width = "50%";
        }
    }
});

function getCompChoice() {
    const play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * 3)];
}

function initGame(playerInput) {
    if (compScore < 4 && playerScore < 4) {
        let play = playRound(getCompChoice(), playerInput);
        const imgLocation = ["../images/two.png", "../images/palm.png", "../images/motivation.png"];
        if (play[0] === "none") {
            playerDiv.setAttribute("style", "background-color: transparent;");
            compDiv.setAttribute("style", "background-color: transparent;");
        } else if (play[0] === "player") {
            playerScore++;
            playerDiv.setAttribute("style", "background-color: #6ea43c;");
            compDiv.setAttribute("style", "background-color: transparent;");
        } else if (play[0] === "comp") {
            compScore++;
            playerDiv.setAttribute("style", "background-color: transparent;");
            compDiv.setAttribute("style", "background-color: #6ea43c;");
        }

        switch (play[1]) {
            case "rock":
                playerChoice.src = imgLocation[2];
                break;
            case "paper":
                playerChoice.src = imgLocation[1];
                break;
            case "scissors":
                playerChoice.src = imgLocation[0];
        }

        switch (play[2]) {
            case "rock":
                compChoice.src = imgLocation[2];
                break;
            case "paper":
                compChoice.src = imgLocation[1];
                break;
            case "scissors":
                compChoice.src = imgLocation[0];
        }

        playerScoreTag.textContent = playerScore;
        compScoreTag.textContent = compScore;
    } else {
        if (compScore == 4) {
            compScore++;
            compScoreTag.textContent = compScore;
            popUpText.textContent = "You lost! Better luck next time!"
        } else if (playerScore == 4) {
            playerScore++;
            playerScoreTag.textContent = playerScore;
            popUpText.textContent = "Congratulations! you beat the game"
        }
        popUpContainer.style.display = "flex";
        content.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
}

function playRound(compSelection, playerSelection) {
    let winner;
    if (compSelection === playerSelection) {
        outputText.textContent = ("Tie");
        winner = "none";
    } else if (compSelection === "rock" && playerSelection === "scissors") {
        outputText.textContent = ("You lose! Rock beats Scissor");
        winner = "comp";
    } else if (playerSelection === "rock" && compSelection === "scissors") {
        outputText.textContent = ("You win! Rock beats Scissors");
        winner = "player";
    } else if (compSelection === "scissors" && playerSelection === "paper") {
        outputText.textContent = ("You lose! Scissor beats Paper");
        winner = "comp";
    } else if (playerSelection === "scissors" && compSelection === "paper") {
        outputText.textContent = ("You Win! Scissor beats Paper");
        winner = "player";
    } else if (compSelection === "paper" && playerSelection === "rock") {
        outputText.textContent = ("You lose! Paper beats Rock");
        winner = "comp";
    } else if (playerSelection === "paper" && compSelection === "rock") {
        outputText.textContent = ("You win! Paper beats Rock");
        winner = "player";
    }
    return [winner, playerSelection, compSelection];
}
