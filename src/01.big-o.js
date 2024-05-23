const { performance } = require("node:perf_hooks");

const characters = [
  "Coral",
  "Barracuda",
  "Bob",
  "Pearl",
  "Squirt",
  "Swordfish",
  "Patients",
  "Kathy",
  "Dolphins",
  "Gerald",
  "Nemo",
  "Philip Sherman",
  "Blenny",
  "Diver",
];

const large = new Array(1000000).fill("nemo");

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == "nemo") {
      console.log(`Found the Nemo at ${i}`);
    }
  }
  let t1 = performance.now();
  console.log(`Call to find nemo took ${t1 - t0}ms`);
};

// * O(n) --> Linear Time
findNemo(characters);
findNemo(large);
