
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Company = sequelize.define("company", {
  
  state: Sequelize.STRING,
  companyName: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
  age: Sequelize.INTEGER,
  address: Sequelize.STRING,
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  lastPaid: Sequelize.STRING,
  listingLevel: Sequelize.STRING,
  id: Sequelize.INT
}, {
 
  freezeTableName: true
});

Company.sync();

module.exports = Company;
