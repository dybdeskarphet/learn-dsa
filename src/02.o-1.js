const coolBoxes = ["box1", "box2", "box3", "box4", "box5"];

const logBox = (boxes) => {
  console.log(boxes[0]);
};

const logTwoBoxes = (boxes) => {
  console.log(`${boxes[0]} ${boxes[1]}`);
};

logBox(coolBoxes); // O(1) --> Constant time
logTwoBoxes(coolBoxes); // O(1) --> Constant time
