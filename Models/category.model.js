const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

const category = sequelize.define('category', {
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    added_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
}, {
    tableName: 'category',
    timestamps: true
});

module.exports = category;