const rangeInput = document.querySelector(".rangeNum");
const guessInput = document.querySelector(".guessNum");
const rangeForm = document.getElementById("range-form");
const playForm = document.getElementById("play-form");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result_text");

function handlerRangeInput() {
  const rangeNumber = rangeInput.value;
  guessInput.setAttribute("max", rangeNumber);
}

rangeForm.addEventListener("input", handlerRangeInput);

function playNumbergame(event) {
  event.preventDefault();
  const rangeNumber = rangeInput.value;
  const guessNumber = parseInt(guessInput.value);
  const randomNumber = Math.floor(Math.random() * rangeNumber) + 1;

  if (guessNumber === randomNumber) {
    result.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}`;
    resultText.innerHTML = "You won!";
  } else {
    result.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}`;
    resultText.innerHTML = "You lost!";
  }
}

playForm.addEventListener("submit", playNumbergame);
