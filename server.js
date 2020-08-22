const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(path.join(__dirname, "build")));
app.use("*", (req, res) => {
  res.redirect("/");
});
const port = process.env.PORT || 80;
console.log("listening on port :", port);
app.listen(port);
