const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

const users = sequelize.define('user', {
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
    },
    userrole: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull:false,
    },

}, {
    tableName: 'users',
    timestamps:true
});
module.exports = users;