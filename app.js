let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const gencomchoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawGame = () => {
//   console.log("game was draw!");
  msg.innerText = "The Game Was Draw ,Try Again.";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userChoice,comChoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    //  console.log("user win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    computerscorepara.innerText = computerscore;
    // console.log("user lose!");
    msg.innerText = `You Lose! ${comChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
//   console.log("user choice id is", userChoice);
  const comChoice = gencomchoice();
//   console.log("computer choice id is", comChoice);

  if (userChoice === comChoice) {
    //game was draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = comChoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = comChoice === "rock" ? fasle : true;
    }
    showWinner(userWin,userChoice,comChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked ",choiceid);
    playGame(userChoice);
  });
});
