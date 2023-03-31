// Tournament Winner

function tournamentWinner(competitions, results) {
  const scores = {}; // keep track of each team's score
  let maxScore = 0; // keep track of the maximum score till now
  let winner = ""; // keep track of the current winner team

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const homeTeamWon = results[i] === 1;

    const winningTeam = homeTeamWon ? homeTeam : awayTeam;
    if (!scores[winningTeam]) {
      scores[winningTeam] = 0;
    }
    scores[winningTeam] = scores[winningTeam] + 3;

    // update the maximum score and the current winner team if necessary
    if (scores[winningTeam] > maxScore) {
      maxScore = scores[winningTeam];
      winner = winningTeam;
    }
  }

  return winner;
}

let competitions = [
  ["html", "C#"],
  ["C#", "Python"],
  ["Python", "html"],
];
let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));


