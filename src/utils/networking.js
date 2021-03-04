import axios from "axios";
import { logger, buildQuery } from "./helper.js";

const makeRequest = async (query) => {
  logger("connecting to the api...");

  const api_url = buildQuery(query);

  const { data } = await axios.get(api_url);

  return [data];
};

export { makeRequest };
