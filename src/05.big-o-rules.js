const firstGroup = [1, 2, 3, 4, 5];
const secondGroup = [6, 7, 8, 9, 10];

const logTwoDifferentGroupOfBoxes = (boxes, boxes2) => {
  boxes.forEach((e) => {
    console.log(e);
  });

  boxes2.forEach((e) => {
    console.log(e);
  });
};

logTwoDifferentGroupOfBoxes(firstGroup, secondGroup);

/* O(n + m) --> Because it has two different group of arrays. 
It's not the same number of items that we're going to iterate.
*/

// If forEachs were nested, the Big O of it would be  O(n*m).
