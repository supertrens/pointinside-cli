import RedisServer from "redis-server";

const REDIS_PORT = process.env.REDIS_PORT || 31000;
const REDIS_SERVER_URL = `127.0.0.1:${REDIS_PORT}`;

console.log("# redis-server starting...");

const server = new RedisServer(REDIS_PORT);

server.open((err) => {
  const isRedisAlreadyRunning = err && err.code === -1;

  if (err === null || isRedisAlreadyRunning) {
    console.log(`redis server started succesfully running ${REDIS_SERVER_URL}`);
    import("./app.js");
  } else {
    console.log("redis-server started with err:", err);
  }
});
