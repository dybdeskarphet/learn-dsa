const chars = ["a", "b", "c", "d"];
console.log(chars);

// push --> O(1)
chars.push("e");
console.log(chars);

// pop --> O(1)
last_char = chars.pop();
console.log(chars);
console.log(last_char);

// unshift --> O(n)
chars.unshift("1");
console.log(chars);

// splice --> O(n/2)
chars.splice(2, 0, "monkey");
console.log(chars);
