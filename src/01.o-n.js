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

const large = new Array(100).fill("nemo");

const findNemo = (array) => {
  let t0 = performance.now();

  array.forEach((element) => {
    if (element.toLowerCase() == "nemo") {
      console.log(`Found the Nemo!`);
    }
  });

  let t1 = performance.now();
  console.log(`Call to find nemo took ${t1 - t0}ms`);
};

// * O(n) --> Linear Time
findNemo(characters);
findNemo(large);
