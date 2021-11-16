const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const main = express();

// It's important to keep the prefix here. In case you don't want
// to use the prefix "v1", use empty string as "". Otherwise, all
// routes would result in 404.
// More info: https://bit.ly/3Fjp0Kz
main.use("/v1", app); // This adds the prefix `/v1` to all routes

main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json());

const cacheCntrlHeaders = "public, max-age=300, s-maxage=600";

app.get("/", (request, response) => {
  response.send(`Hello, World!`);
});

app.get("/timestamp", (request, response) => {
  response.send(`${Date.now()}`);
});

app.get("/timestamp-cached", (request, response) => {
  response.set("Cache-Control", cacheCntrlHeaders);
  response.send(`${Date.now()}`);
});

exports.api = functions.https.onRequest(main);
