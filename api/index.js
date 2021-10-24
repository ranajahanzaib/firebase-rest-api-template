const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const main = express();

main.use("/v1", app); // Add the prefix `/v1` to all the routes
main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json());

const cacheCntrlHeaders = "public, max-age=300, s-maxage=600";

app.get("/timestamp", (request, response) => {
  response.send(`${Date.now()}`);
});

app.get("/timestamp-cached", (request, response) => {
  response.set("Cache-Control", cacheCntrlHeaders);
  response.send(`${Date.now()}`);
});

exports.api = functions.https.onRequest(main);
