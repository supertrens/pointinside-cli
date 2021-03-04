import boxen from "boxen";
import inquirer from "inquirer";

import { logger } from "./utils/helper.js";
import { BY_CITY, BY_LAT_LNG, MENU_LIST } from "./utils/constant.js";

import { inquiryByCity, inquiryByLatAndLng } from "./queryOptions/index.js";

function init() {
  greeting();
  loadMenu();
}

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

async function loadMenu() {
  const { menu } = await inquirer.prompt(MENU_LIST);
  switch (menu) {
    case BY_CITY:
      await inquiryByCity();
      break;
    case BY_LAT_LNG:
      await inquiryByLatAndLng();
      break;
    default:
      await inquiryByLatAndLng();
  }
}

init();
