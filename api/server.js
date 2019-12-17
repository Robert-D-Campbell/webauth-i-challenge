const express = require("express");
const session = require("express-session");

const apiRouter = require("./api-router.js");
const configureMiddleware = require("./config-middleware.js");

const server = express();

const sessionConfig = {
  name: "money", //sid,
  secret: "can you keep a secret?",
  cookie: {
    maxAge: 1000 * 30,
    secure: false, //true in production
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false //GDPR laws against setting cookies automatically
};

configureMiddleware(server);
server.use(session(sessionConfig));
server.use("/api", apiRouter);

module.exports = server;
