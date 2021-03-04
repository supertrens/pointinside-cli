import chalk from "chalk";
import { SUCCESS_COLOR, BASE_URL } from "./constant.js";

const logger = (msg, type = SUCCESS_COLOR) => {
  console.log(chalk[type](msg));
};

const printResult = (data) => {
  if (!data) return;

  logger("Result(s)");
  console.table([...data], ["zoneName", "countryName", "formatted"]);
};

const buildQuery = (query) => {
  return `${BASE_URL}${query}&format=json`;
};

export { logger, printResult, buildQuery };
