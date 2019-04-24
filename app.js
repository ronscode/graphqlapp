const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Hello SPACE!");
});

app.listen(3000);
console.log("listening on port 3k");
