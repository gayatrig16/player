const players = [
  {
    name: "VIRAT KOHLI",
    jersey: 18,
    strikeRate: "145.5",
    matches: 120,
    best: "95* vs Titans"
  },
  {
    name: "ROHIT SHARMA",
    jersey: 45,
    strikeRate: "132.4",
    matches: 98,
    best: "82 vs Kings"
  },
  // Add more players as needed
];

function openModal(index) {
  const player = players[index];
  document.getElementById("modalName").innerText = player.name;
  document.getElementById("modalJersey").innerText = player.jersey;
  document.getElementById("modalStrikeRate").innerText = player.strikeRate;
  document.getElementById("modalMatches").innerText = player.matches;
  document.getElementById("modalBest").innerText = player.best;

  document.getElementById("playerModal").style.display = "block";
}

function closeModal() {
  document.getElementById("playerModal").style.display = "none";
}
