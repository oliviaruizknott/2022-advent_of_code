var fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").split("\n");
console.log("Here’s the data: ");
console.log(data);

const elfLoads = [];
let currentElf = 0;

data.forEach((calories) => {
  if (calories == "") {
    elfLoads.push(currentElf);
    currentElf = 0;
    // console.log("--");
  } else {
    currentElf += parseInt(calories);
  }
});

console.log("Part 1: ", Math.max(...elfLoads));
