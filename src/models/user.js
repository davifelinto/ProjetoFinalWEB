const Sequelize = require('sequelize')
const database = require('../db')
const Account = require('./account')
 
const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(32)
    },
    password: {
        type: Sequelize.STRING(32)
    },
})

// Relacionamento 1-n
User.hasMany(Account)
Account.belongsTo(User) //user_id

module.exports = User;