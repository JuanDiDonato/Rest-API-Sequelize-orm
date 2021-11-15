// Modelo de la tabla Users
'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models.Tasks);
      // define association here
      // defino la asociacion de las tablas a nivel de proyecto
      Users.hasMany(models.Tasks, { // Un usuario tiene muchas tareas
        foreignKey: 'id', // Defino la llave
      })
    }
  };
  // Tipos de datos de las columnas
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};