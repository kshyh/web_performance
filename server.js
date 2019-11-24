var express = require("express");
var compression = require("compression");
var app = express();

app.use(compression());
app.use(express.static("dist"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on ", port);
});
