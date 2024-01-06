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

  document.addEventListener("keypress", function (event) {
    const guess = event.key.toLowerCase();
    if (remainingLetters > 0) {
      let correctGuess = false;
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
          correctGuess = true;
        }
      }
      if (correctGuess) {
        updateOutput();
      }
      if (remainingLetters === 0) {
        alert("Good job! The answer was " + word);
      }
    }
  });
}
