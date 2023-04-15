const connection = require('../database/index');
const { Sequelize } = require('sequelize')

const Patient = connection.define('patient', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    birth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    emergency: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    allergy: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    specialCares: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    healthInsurance: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    status: {
        type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"),

    },

    totalAtendances: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
});

module.exports = Patient;