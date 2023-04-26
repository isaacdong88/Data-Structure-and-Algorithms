//Naive search, most basic searching algo for searching for a substring match

const naiveSearch = (phrase, pattern) => {
  let match = 0;
  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], phrase[i + j]);
      if (pattern[j] !== phrase[i + j]) {
        console.log("Break");
        break;
      }
      if (j === pattern.length - 1) {
        match += 1;
        console.log("Found One");
      }
    }
  }
  return match;
};

console.log(naiveSearch("Hello Jello", "ello"));
