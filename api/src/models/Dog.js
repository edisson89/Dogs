const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    weight: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
      height: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bred_for: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reference_image_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    image: {
      type: DataTypes.JSONB,
      allowNull: true,
    },

  });
};
