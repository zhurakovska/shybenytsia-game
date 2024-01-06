function startGame() {
  const words = ["dog", "monkey", "amazing", "cat", "land"];
  const word = pickWord(words);
  let answerArray = [];
  setAnswerArray(word);

  let remainingLetters = word.length;
  const outputElement = document.getElementById("output");

  function pickWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }

  function setAnswerArray(word) {
    for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
  }

  function updateOutput() {
    outputElement.textContent = answerArray.join(" ");
  }

  updateOutput();

  while (remainingLetters > 0) {
    const guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter");
    } else {
      let correctGuess = false;
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
          correctGuess = true;
        }
      }
      if (correctGuess) {
        updateOutput();
      }
    }
  }

  alert("Good job! The answer was " + word);
}
