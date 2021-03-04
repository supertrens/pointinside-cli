import inquirer from "inquirer";

import { printResult, logger } from "../utils/helper.js";
import { makeRequest } from "../utils/networking.js";

export default async function queryByLatAndLng(params) {
  const questions = [
    {
      type: "input",
      name: "latitude",
      message: "Please enter the lattitude",
    },
    {
      type: "input",
      name: "longitude",
      message: "Please enter the longitude",
    },
  ];

  try {
    const { latitude, longitude } = await inquirer.prompt(questions);
    const query = `&by=position&lat=${latitude}&lng=${longitude}`;

    const data = await makeRequest(query);

    printResult(data);
  } catch (error) {
    console.log("Something went wrong", error.message);
    logger("Canceled", ERROR_COLOR);
  }
}
