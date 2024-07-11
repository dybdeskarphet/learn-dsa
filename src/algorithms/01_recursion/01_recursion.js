let counter = 1;

const inception = () => {
  if (counter > 3) {
    console.log("done");
    return "done";
  }

  counter++;
  console.log("will run again!");
  inception();
};

inception();
