const { DataTypes } = require("sequelize");
const sequelize = require('../Connection/connection');

const sub_category = sequelize.define('sub_category', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sub_category_name: {
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
    tableName: 'sub_category',
    timestamps: true
});

module.exports = sub_category;