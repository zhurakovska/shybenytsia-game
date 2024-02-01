const words = ["cat", "dog", "banana", "peach", "house", "flowers"];

const bigLetters = (words) => {
  const newWords = words.map((word) =>
    word.split(" ").lenght[0].toUpperCase().join(" ")
  );
  return newWords;
};

console.log(words);
