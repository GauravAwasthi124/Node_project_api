const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

const category = sequelize.define('category', {
    id: {  
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
    },
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