const words = ["dog", "monkey", "amazing", "cat", "land"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = Array(word.length).fill("_");
let remainingLetters = word.length;
let attempts = 6;

const wordElement = document.getElementById("word");
const attemptsLeftElement = document.getElementById("attemptsLeft");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessButton");
const resultElement = document.getElementById("result");

function updateWord() {
  wordElement.textContent = answerArray.join(" ");
}

function checkLetter(letter) {
  let correctGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && answerArray[i] === "_") {
      answerArray[i] = letter;
      remainingLetters--;
      correctGuess = true;
    }
  }
  if (!correctGuess) {
    attempts--;
    attemptsLeftElement.textContent = attempts;
  }
  updateWord();
  checkGameStatus();
}

function checkGameStatus() {
  if (remainingLetters === 0) {
    resultElement.textContent = "Congratulations! You won!";
    guessButton.disabled = true;
  } else if (attempts === 0) {
    resultElement.textContent = "You lost! The word was: " + word;
    guessButton.disabled = true;
  }
}

updateWord();

guessButton.addEventListener("click", function () {
  const letter = letterInput.value.toLowerCase().trim();
  if (letter && letter.length === 1 && letter.match(/[a-z]/i)) {
    checkLetter(letter);
  } else {
    resultElement.textContent = "Please enter a valid single letter!";
  }
  letterInput.value = "";
});
