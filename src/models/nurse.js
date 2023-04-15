const connection = require('../database/index');
const { Sequelize } = require('sequelize')

const Nurse = connection.define('nurse', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    birth: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    academy: {
        type: Sequelize.STRING,
        allowNull: true
    },

    cofenUf: {
        type: Sequelize.STRING,
        allowNull: true
    },

});

module.exports = Nurse;

/* 


Cadastro do CRM/UF:  Obrigatório, deve ser texto.
Especialização Clínica: Obrigatório com as seguintes opções
Clínico Geral
Anestesista
Dermatologia
Ginecologia
Neurologia
Pediatria
Psiquiatria
Ortopedia
Estado no Sistema
Ativo
Inativo
Total de atendimentos realizados:
Este item é um contador que inicia em zero. Sempre que um médico realiza um atendimento este valor deve ser incrementado
O sistema deve perguntar qual foi o médico e paciente que participaram do atendimento. O atendimento médico deve ter o Identificador do paciente.
 */