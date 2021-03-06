const Sequalize = require("sequelize");

const sequelize = Sequalize("node-complete", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.export = sequelize;
