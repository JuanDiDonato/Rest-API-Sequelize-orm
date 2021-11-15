// Modelo de la tabla Tasks
'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // defino la asociacion de las tablas a nivel de proyecto
      Tasks.belongsTo(models.Users, { // Una tarea tiene solo un usuario
        foreignKey: 'userId',
      })
    }
  };
  Tasks.init({
    userId:DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};