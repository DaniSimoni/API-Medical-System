const connection = require('../database/index');
const { Sequelize } = require('sequelize');
const Patient = require('./patient')
const Doctor = require('./doctor')

const Attendance = connection.define('attendance', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    idPatient: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    idDoctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Attendance.belongsTo(Patient, {foreignKey: "idPatient"});
Attendance.belongsTo(Doctor, {foreignKey: "idDoctor"});

module.exports = Attendance;

