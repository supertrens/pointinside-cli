import { readQueriesHistory } from "../lib/redis.js";
import { printResult, logger } from "../utils/helper.js";

export default async function queryByHistory() {
  const history = await readQueriesHistory();
  if (!history.length) {
    console.log("NO HISTORY YET");
    return;
  }
  printResult(history);
}
