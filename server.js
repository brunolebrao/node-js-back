const express = require("express");
const app = express();
const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3030, () => {
  console.log("Server is listening on port 3030. Ready to accept requests!");
});