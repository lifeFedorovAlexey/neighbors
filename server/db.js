const mongoose = require("mongoose");

module.exports = {
  connect: async function() {
    const db = process.env.DB;
    mongoose.connect(
      process.env.DB_HOST + db,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      function(err) {
        if (err) throw err;
        console.log(currentTime() + " - Подключен к базе " + db);
      }
    );
  },
};

function currentTime() {
  const date = new Date();
  const time =
    date.getFullYear() +
    "-" +
    Number.parseInt(date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  return time;
}
