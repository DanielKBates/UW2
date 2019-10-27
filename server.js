

var express = require("express");



var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


require("./app/routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
module.exports = app;