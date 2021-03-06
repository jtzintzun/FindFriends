// -----------------------------------------------------------------------------
// DEPENDENCIES
// -----------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// -----------------------------------------------------------------------------
// EXPRESS CONFIGURATION
// -----------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// -----------------------------------------------------------------------------
// ROUTER
// -----------------------------------------------------------------------------
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// -----------------------------------------------------------------------------
// LISTENER
// -----------------------------------------------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
