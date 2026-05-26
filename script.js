const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

function getScores() {
  const data = localStorage.getItem("scores");
  return data ? JSON.parse(data) : [];
}

function setScores(list) {
  localStorage.setItem("scores", JSON.stringify(list));
}

function renderScores(list) {
  if (!list.length) {
    scores.innerHTML = "No scores yet";
    return;
  }

  scores.innerHTML = `
    <table>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
      ${list
        .map(
          (item) => `
            <tr>
              <td>${item.name}</td>
              <td>${item.score}</td>
            </tr>
          `
        )
        .join("")}
    </table>
  `;
}

function saveScore() {
  const name = nameInput.value.trim();
  const scoreValue = scoreInput.value.trim();

  if (!name || !scoreValue) return;

  const score = Number(scoreValue);
  const savedScores = getScores();

  savedScores.push({ name, score });
  savedScores.sort((a, b) => b.score - a.score);

  setScores(savedScores);
  renderScores(savedScores);

  nameInput.value = "";
  scoreInput.value = "";
}

function showScores() {
  const savedScores = getScores().sort((a, b) => b.score - a.score);
  renderScores(savedScores);
}

showScores();