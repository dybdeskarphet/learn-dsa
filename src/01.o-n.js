const { performance } = require("node:perf_hooks");

const characters = [
  "Coral",
  "Barracuda",
  "Bob",
  "Pearl",
  "Squirt",
  "Nemo",
  "Swordfish",
  "Patients",
  "Kathy",
  "Dolphins",
  "Gerald",
  "Philip Sherman",
  "Blenny",
  "Diver",
];

const large = new Array(100).fill("nemo");

const findNemo = (array) => {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i].toLowerCase() == "nemo") {
      console.log(`Found the Nemo!`);
      break;
    }
  }

  let t1 = performance.now();
  console.log(`Call to find nemo took ${t1 - t0}ms`);
};

// * O(n) --> Linear Time
findNemo(characters);
