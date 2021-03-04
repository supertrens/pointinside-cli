const SUCCESS_COLOR = "green";
const ERROR_COLOR = "red";

const apiKey = process.env.TIME_ZONE_DB_API_KEY || "YP1WD9YX00FW";
const BASE_URL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}`;

export { SUCCESS_COLOR, ERROR_COLOR, BASE_URL };
