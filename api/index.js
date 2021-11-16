const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const main = express();

main.use(app); // replace with main.use('/v1', app) to enable versioning
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
