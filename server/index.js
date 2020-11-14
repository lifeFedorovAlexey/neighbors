require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
let passport = require("./config-pasport");

const PORT = process.env.API_SERVER_PORT;
const maxAge = Number(process.env.MAX_AGE_SESSION);
const session = require("express-session");

const FileStore = require("session-file-store")(session);

(async function start() {
  console.log(currentTime() + " - API загружается");
  try {
    await connectDB();
    await startAPI();
    console.log(currentTime() + " - API запущено");
  } catch (err) {
    console.log(err);
  }
})();

async function startAPI() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ extended: true }));
  app.use(
    session({
      secret: "hghtyNN23h",
      store: new FileStore(),
      cookie: {
        path: "/",
        httpOnly: true,
        maxAge,
      },
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // require('./routes')(app);

  app.get("/", (req, res) => {
    res.send(`
      <a href='/auth/vkontakte' style="display: block;
      text-align: center;">
        <button style='background-color: #4eb562;
          border: none;
          border-radius: 10px;
          padding: 25px;
          color: #fff;
          box-shadow: 0 0 4px 1px #454941;
          outline: none!important;
          font-size: 20pt;
          outline: none!important;'>
            Войти
        </button>
      </a>`);
  });

  app.get("/authfail", (req, res) => {
    res.send(`
      <p style="
        background-color: red;
        border: none;
        border-radius: 10px;
        padding: 25px;
        color: #fff;
        box-shadow: 0 0 4px 1px #454941;
        font-size: 20pt;
        outline: none!important;
        text-align: center;">
          Вам не доступны права на просмотр
        </p>
        <a href='/' style="display: block;
        text-align: center;">
        <button style='background-color: #4eb562;
          border: none;
          border-radius: 10px;
          padding: 25px;
          color: #fff;
          box-shadow: 0 0 4px 1px #454941;
          outline: none!important;
          font-size: 20pt;
          outline: none!important;'>
            Главная
        </button>
      </a>`);
  });

  app.get("/auth/vkontakte", passport.authenticate("vkontakte"));

  app.get(
    "/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
      successRedirect: "/neighbors",
      failureRedirect: "/",
    })
  );

  const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log("аутентифицирован");
      next();
    } else {
      console.log("не аутентифицирован");
      return res.redirect("/authfail");
    }
  };

  app.use("/neighbors", auth, express.static("dist"));

  app.get("/api/isAuth", auth, (req, res) => {
    res.status(200).send("авторизован");
  });

  app.listen(PORT, () => {
    console.log("API Запущен, порт: " + PORT);
  });
}

function connectDB() {
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
}

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
