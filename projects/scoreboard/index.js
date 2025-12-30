// Add a new game button
// Highlight the leader
// Add a few more counters (periods, fouls, timer)
// Change the design?

let homeScoreBtns = document.getElementById("home-score-btns");
let awayScoreBtns = document.getElementById("away-score-btns");

let awayScore = document.getElementById("away-score");
let homeScore = document.getElementById("home-score");
let newGameBtn = document.getElementById("new-game");

awayScoreBtns.addEventListener("click", (event) => {
  const clickedButton = event.target;
  const action = clickedButton.getAttribute("data-action");
  if (action === "add-one") {
    awayScore.textContent = Number(awayScore.textContent) + 1;
  } else if (action === "add-two") {
    awayScore.textContent = Number(awayScore.textContent) + 2;
  } else if (action === "add-three") {
    awayScore.textContent = Number(awayScore.textContent) + 3;
  }
});
homeScoreBtns.addEventListener("click", (event) => {
  const clickedButton = event.target;
  const action = clickedButton.getAttribute("data-action");
  if (action === "add-one") {
    homeScore.textContent = Number(homeScore.textContent) + 1;
  } else if (action === "add-two") {
    homeScore.textContent = Number(homeScore.textContent) + 2;
  } else if (action === "add-three") {
    homeScore.textContent = Number(homeScore.textContent) + 3;
  }
});

newGameBtn.addEventListener("click", (event) => {
  awayScore.textContent = "0";
  homeScore.textContent = "0";
});
