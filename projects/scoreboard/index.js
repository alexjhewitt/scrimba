// Add a new game button
// Highlight the leader
// Add a few more counters (periods, fouls, timer)
// Change the design?

let homeScoreBtns = document.getElementById("home-score-btns");
let awayScoreBtns = document.getElementById("away-score-btns");

let awayScore = document.getElementById("away-score");

awayScoreBtns.addEventListener("click", (event) => {
  const clickedButton = event.target;
  const action = clickedButton.getAttribute("data-action");
  if (action === "add-one") {
    console.log("hi");
    awayScore.textContent = Number(awayScore.textContent) + 1;
  }
});
