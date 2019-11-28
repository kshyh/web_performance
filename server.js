var express = require("express");
var compression = require("compression");
var shrinkRay = require("shrink-ray-current");
var app = express();

app.use(shrinkRay());
// app.use(compression());
app.use(express.static("dist", {maxAge: "10s"}));

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on ", port);
});
