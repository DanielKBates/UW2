
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Repoman = sequelize.define("repoman", {
  
  state: Sequelize.STRING,
  companyName: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
  address: Sequelize.STRING,
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  lastPaid: Sequelize.STRING,
  listingLevel: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primaryKey: true}
  
}, {
 
  freezeTableName: true,
  timestamps: false,
});
module.exports = Repoman;


