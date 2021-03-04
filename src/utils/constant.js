const SUCCESS_COLOR = "green";
const ERROR_COLOR = "red";

const apiKey = process.env.TIME_ZONE_DB_API_KEY || "YP1WD9YX00FW";
const BASE_URL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}`;

const BY_CITY = "City";
const BY_LAT_LNG = "Latitude and Longitude";

/** Menu */
const MENU_LIST = [
  {
    type: "rawlist",
    name: "menu",
    message:
      "Do you want to lookup a timezone by City or Lattitude/Longitude (default)",
    choices: [BY_CITY, BY_LAT_LNG],
    default: "Lat & Lng",
  },
];

export { SUCCESS_COLOR, ERROR_COLOR, BASE_URL, MENU_LIST, BY_CITY, BY_LAT_LNG };
