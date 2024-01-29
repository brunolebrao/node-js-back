require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(mongo, {})
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => {
    console.log(e);
  });

const port = process.env.PORT;
const mongo = process.env.CONNECTION_STRING;
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
