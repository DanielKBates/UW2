var Repoman = require("../models/company.js");
var Sequelize = require("sequelize")
module.exports = function (app) {
    
    app.get("/api/all", function (req, res) {
        Repoman.findAll({ raw: true }).then(function (result) {
            console.log(result)
            res.json(result)
        });
    });
    app.get("/api/state/:state", function (req, res) {
        var stateVal = req.params.state.toUpperCase();
        console.log(stateVal);
        Repoman.findAndCountAll({
            raw: true,
            where: {
                state:{
                 [Sequelize.Op.substring]: stateVal}
                    
            }
            
        }).then((result) => {
            console.log(result);
            res.json(result);
        });
    });
    app.get("api/company/:companyName", (req, res) => {
        Repoman.findAll({
            raw: true,
            where: {
                companyName: {
                    $iLike: req.params.companyName
                }
            }
        })
    })
}