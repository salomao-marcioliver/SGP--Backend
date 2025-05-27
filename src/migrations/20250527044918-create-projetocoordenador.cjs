// src/database/migrations/XXXXXXXXXXXXXX-create-projetocoordenador.js

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projeto_coordenador', {
      codprojeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      data_termino: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      codcoord: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nome_coord: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instituto_coord: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projeto_coordenador');
  }
};

