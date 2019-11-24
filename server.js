var express = require("express");
var compression = require("compression");
var app = express();

app.use(compression());
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on ", port);
});
