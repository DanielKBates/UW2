var express = require("express");
var db = require("./models/company.js");
const expressValidator = require('express-validator');
const initializePassport = require('./config/passport.js');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override')

initializePassport(
    passport,
    email => users.find(user => user.email === email)
);

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
})

app.get('/', checkAuthenticated, (req, res) => {
    res.render('/customer.html', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('/login.html')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('/login')
})

app.post('/login', checkNotAuthenticated, async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/customer')
    } catch {
        res.redirect('/login')
    }
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

module.exports = app;