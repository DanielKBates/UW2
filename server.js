

var express = require("express");
var app = express();
var db = require("./models/company.js");



var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static( __dirname + "/public"));


require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
// })
module.exports = app;

