import boxen from "boxen";
import { logger } from "./utils/helper.js";

function greeting() {
  const greeting = "Welcome to the pointinside Node / Backend Coding Exercise";
  const boxenOptions = {
    padding: 2,
    margin: 2,
    borderStyle: "round",
    borderColor: "green",
    color: "yellow",
    backgroundColor: "#333",
  };
  logger(boxen(greeting, boxenOptions));
}

greeting();
