import { parseFileToArray } from "../utils.mjs";

const data = parseFileToArray("input.txt");

const elfLoads = [];
let currentElf = 0;

data.forEach((calories) => {
  if (calories == "") {
    elfLoads.push(currentElf);
    currentElf = 0;
  } else {
    currentElf += parseInt(calories);
  }
});

console.log("Part 1: ", Math.max(...elfLoads));
