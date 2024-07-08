const testString = "Merhaba insanlık!";

const reverseString = (string) => {
  if (!string || typeof string !== "string") {
    return false;
  }

  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

const shortReverse = (s) => s.split("").reverse().join("");
const veryShortReverse = (s) => [...s].reverse().join("");

console.log(reverseString(testString));
console.log(shortReverse("hey"));
console.log(veryShortReverse("hey ya!"));
