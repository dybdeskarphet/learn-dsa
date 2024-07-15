const letters = [
  "n",
  "l",
  "g",
  "h",
  "b",
  "o",
  "a",
  "c",
  "f",
  "m",
  "k",
  "d",
  "j",
  "e",
];
const basket = [2, 66, 23, 92, 9, 13, 26];

basket.sort(function (a, b) {
  return a - b;
});

letters.sort();

console.log(letters);
console.log(basket);
