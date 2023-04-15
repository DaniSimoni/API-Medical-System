const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    port: 5432,
    database: 'labmedicinebd',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
});

module.exports = connection;