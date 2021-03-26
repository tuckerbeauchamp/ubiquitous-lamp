const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("*", function (req, res) {
  res.send("I am the heroku test application");
});

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
