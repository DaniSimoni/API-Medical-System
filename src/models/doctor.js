const connection = require('../database/index');
const { Sequelize } = require('sequelize');

const Doctor = connection.define('doctor', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gender: {
        type: Sequelize.STRING,
        allowNull: true,
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
        allowNull: false,
    },

    academy: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    crmUf: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    specialization: {
        type: Sequelize.ENUM(
            "Clínico Geral",
            "Anestesista",
            "Dermatologia",
            "Ginecologia",
            "Neurologia",
            "Pediatria",
            "Psiquiatria",
            "Ortopedia"
            ),
        allowNull: true,
    },

    statusDoctor: {
        type: Sequelize.ENUM("ATIVO", "INATIVO"),
        allowNull:false,
    },
    totalAtendances: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});


module.exports = Doctor;