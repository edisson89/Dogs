const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      primaryKey : true,
      allowNull: false,
     
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
