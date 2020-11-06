const UTILS = require("./utils/time");
const DB = require("./db/db");
const API = require("./api/api");
const SERVER_FRONT = require("./server/production");

(async function start() {
  console.log(UTILS.currentTime() + " - запуск компонентов...");
  try {
    await DB.connect();
    await API.start();
    await SERVER_FRONT.start();
  } catch (err) {
    console.log("ошибка при запуске - " + err);
  }
})();
