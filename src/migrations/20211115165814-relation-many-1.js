// Migracion para las relaciones
// Para establecer las relaciones de tablas en la base de datos MySQL, NO a nivel proyecto, eso lo marco en los modelos.
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const options = {  // Objeto con las configuraciones de las relaciones
      fields : ['userId'], // Columna a relacionar
      type: 'FOREIGN KEY',
      name: 'FK_1',  // Nombre de la relacion
      references: {  // Referencia con que lo voy a relacionar
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',  // Parametros 
      onUpdate: 'cascade',

    }
    await queryInterface.addConstraint('Tasks', options); // Establesco la relacion

  },
  // Para borrarla, elimino la relacion
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', 'FK_1')
  }
};
