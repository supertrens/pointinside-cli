import axios from "axios";
import { logger, buildQuery } from "./helper.js";
import { readQueryInCache, writeQueryResultInCache } from "../lib/redis.js";

const makeRequest = async (query) => {
  const api_url = buildQuery(query);
  const cacheQueryData = await readQueryInCache(api_url);

  if (cacheQueryData) return cacheQueryData;

  logger("connecting to the api...");

  const { data } = await axios.get(api_url);
  writeQueryResultInCache(api_url, data);

  return [data];
};

export { makeRequest };
