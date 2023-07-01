const Sequelize = require('sequelize');
const database = require('../db');
const Transaction = require('./transaction')
 
const Account = database.define('account', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    number: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    open_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    balance: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

// Relacionamento 1-n
Account.hasMany(Transaction)
Transaction.belongsTo(Account) //account_id

module.exports = Account;