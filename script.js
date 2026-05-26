const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

function getScores() {
  return JSON.parse(localStorage.getItem("scores")) || [];
}

function setScores(list) {
  localStorage.setItem("scores", JSON.stringify(list));
}

function saveScore() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (!name || scoreInput.value.trim() === "") return;

  const savedScores = getScores();
  savedScores.push({ name, score });
  savedScores.sort((a, b) => b.score - a.score);

  setScores(savedScores);

  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

function showScores() {
  const savedScores = getScores().sort((a, b) => b.score - a.score);

  if (savedScores.length === 0) {
    scores.innerHTML = "No scores yet";
    return;
  }

  scores.innerHTML = `
    <table>
      <tbody>
        ${savedScores
          .map(
            (item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.score}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

showScores();