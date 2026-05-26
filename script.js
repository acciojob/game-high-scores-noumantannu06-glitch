// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here
	 const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name === "" || score === "") return;

  const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
  savedScores.push({ name, score });

  localStorage.setItem("scores", JSON.stringify(savedScores));

  nameInput.value = "";
  scoreInput.value = "";
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	const savedScores = JSON.parse(localStorage.getItem("scores")) || [];

  scores.innerHTML = savedScores
    .map((item) => `<p>${item.name}: ${item.score}</p>`)
    .join("");
}


showScores();