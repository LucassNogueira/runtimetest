function findLongestWord(array) {
  let longestWord = "";

  array.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5

// is this also o(n) becuase it only matters what the arr is?! WHY DO I THINK THEYRE ALL O OF N DANGIT
