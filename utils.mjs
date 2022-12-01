import * as fs from "fs";

export const parseFileToArray = (fileName) => {
  const data = fs.readFileSync(fileName, "utf8").split("\n");
  console.log("Here’s the data: ", data);

  return data;
};
