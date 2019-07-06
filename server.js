var express = require("express");

var app = express();

app.use(
  express.static(__dirname + "/public", function() {
    console.log("server up and running...");
  })
);

app.listen(8080);
