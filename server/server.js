const express = require("express");
const app = express();
require("dotenv").config();
const session = require("express-session");
const { SERVER_PORT, SESSION_SECRET } = process.env;
const authCtrl = require("./controller/authController");
const apiCtrl = require("./controller/apiController");

app.use(express.json());

app.get("/api/test", (req, res) => res.json("Test"));

//Session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//api Endpoints

//waiting on massive til needed

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT}  is up and listening`)
);
