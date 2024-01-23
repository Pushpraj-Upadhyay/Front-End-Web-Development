let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userData = document.querySelector("#userWins");
let compData = document.querySelector("#compWins");
let msg = document.querySelector("#msg");
const ranChoice = () => {
    const arr = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx];
}

const Summary = (userWin, userChoice, compChoice) => {
    if (userWin)
    {
        userScore++;
        userData.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compData.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = ranChoice();

    if (userChoice === compChoice)
    {
        msg.innerText = "Game Draw! Try Again";
        msg.style.backgroundColor = "#081b31";
    }

    else
    {
        let userWin = true;
        if (userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
            userWin = compChoice === "scissor" ? true : false;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "scissor" ? false : true;
            userWin = compChoice === "rock" ? true : false;
        }
        else
        {
            userWin = compChoice === "paper" ? true : false;
        }
        Summary(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    let selectedChoice = choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})