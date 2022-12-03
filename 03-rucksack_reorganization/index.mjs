import { parseFileToArray } from "../utils.mjs";

const data = parseFileToArray("input.txt");

const getNumberFromLetter = (letter) => {
  if (letter.toUpperCase() == letter) {
    console.log("It’s uppercase!", letter);
    console.log(letter.charCodeAt(0) - 38);
    return letter.charCodeAt(0) - 38;
  } else {
    console.log("It’s lowercase! ", letter);
    console.log(letter.charCodeAt(0) - 96);
    return letter.charCodeAt(0) - 96;
  }
};

let sum = 0;

data.forEach((rucksack) => {
  console.log("The rucksack: ", rucksack);

  // split the rucksack
  const compartmentB = [...rucksack];
  const compartmentA = compartmentB.splice(0, rucksack.length / 2);
  console.log("The compartments: ", compartmentA, compartmentB);

  // find the overlap
  const misplaced = compartmentA.filter((value) =>
    compartmentB.includes(value)
  );
  console.log("The misplaced item type: ", misplaced[0]);

  sum += getNumberFromLetter(misplaced[0]);

  console.log("Running sum: ", sum);
  console.log("\n");
});

console.log("The final sum is: ");
console.log(sum);
