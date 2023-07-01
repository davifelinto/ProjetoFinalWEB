const Sequelize = require('sequelize');
const database = require('../db');
const User = require('./user')

const Person = database.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    birth_date: {
        type: Sequelize.DATEONLY
    },
    phone: {
        type: Sequelize.BIGINT
    },
    address: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.BIGINT
    },
})

// Relacionamento 1-1
Person.hasOne(User)
User.belongsTo(Person) //person_id

module.exports = Person;