const button = document.querySelector("button");

button.addEventListener("click", rollDice);

function rollDice() {
  const firstDie = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  const secondDie = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  window.alert("First die rolled: " + firstDie + " Second die rolled: " + secondDie);
}
