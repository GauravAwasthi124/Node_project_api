// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

const user = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'user',
    timestamps: false 
});

module.exports = user;
