const Sequelize = require('sequelize');
const database = require('../db');

const Transaction = database.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING(1),
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    value: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    account_origin: {
        type: Sequelize.BIGINT,
    },
    account_destiny: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    obs: {
        type: Sequelize.STRING
    }
})

module.exports = Transaction;