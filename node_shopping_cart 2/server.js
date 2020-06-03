// Imports
const express = require("express");
const app = express();
const endpoints = require("./modules/endpoints");
const db = require("./modules/db");
const port = process.env.PORT || 2000;



app.use("/", endpoints); 

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
  db.initDatabase();

});