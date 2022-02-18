function allUnique(str) {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (str.indexOf(letter) !== str.lastIndexOf(letter)) {
      return false;
    }
  }
  return true;
}

console.log(allUnique("howody"));

// i think this is O(n) beucase it only depends on the string passed into the function
