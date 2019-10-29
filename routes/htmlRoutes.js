var path = require("path");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    app.get("/aboutRepoman", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/aboutRepoman.html"));
    });

    app.get("/aboutUSAWeb", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/aboutUSAWeb.html"));
    });
    app.get("/contactUs", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contactUs.html"))
    });
    app.get("/directory", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/directory.html"))
    });
    app.get("/insurance", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/insurance.html"))
    });
    app.get("/listingOptions", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/listingOptions.html"))
    });
    app.get("/sitePolicy", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/sitePolicy.html"))
    });
    app.get("/refund", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/refund.html"))
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });
    app.get("/customer", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/customer.html"))
    });


    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};