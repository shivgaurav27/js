const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: sequelize.STRING,
  email: sequelize.STRING,
});

module.exports = User;
