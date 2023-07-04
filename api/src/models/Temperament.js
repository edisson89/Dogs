const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Temperament', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: true,
        
        
   },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
   
  });


};