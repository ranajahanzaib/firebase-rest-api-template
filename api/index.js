const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const main = express();

main.use(app); // replace with main.use('/v1', app) to enable versioning
main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json());

const cacheCntrlHeaders = "public, max-age=300, s-maxage=600";

app.get("/", (req, res) => {
  res.send(`Hello, World!`);
});

app.get("/timestamp", (req, res) => {
  res.send(`${Date.now()}`);
});

app.get("/timestamp-cached", (req, res) => {
  res.set("Cache-Control", cacheCntrlHeaders);
  res.send(`${Date.now()}`);
});

exports.api = functions.https.onRequest(main);
