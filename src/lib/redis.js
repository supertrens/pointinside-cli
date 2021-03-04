import redis from "redis";
import { promisify } from "util";
import { updateDateToCurrent } from "../utils/helper.js";

const client = redis.createClient(process.env.REDIS_PORT || 31000);
client.get = promisify(client.get);
client.lrange = promisify(client.lrange);

client.on("error", (error) => console.error(error));

// Use Redis as datasore

/**
 * Check redis to see if we had previously query this given location.
 * if there is a hit , we spread the currentTime based on the cacheData timezone
 * to make sure the time is in current time while still avoid the api call,
 * @param key: the location url
 */
const readQueryInCache = async (key) => {
  const data = await client.get(key);

  if (!data) return;

  const parsedData = JSON.parse(data);

  // expecting array of object
  return [updateDateToCurrent(parsedData)];
};

/**
 * The key is the actual url with the query
 */
const writeQueryResultInCache = (key, data) => {
  const dataString = JSON.stringify(data);
  client.set(key, dataString);
  client.lpush("history", dataString);
};

export { readQueryInCache, writeQueryResultInCache };
