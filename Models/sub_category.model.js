const { DataTypes } = require("sequelize");
const sequelize = require('../Connection/connection');
const category = require('../Models/category.model');



const sub_category = sequelize.define('sub_category', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: category,
            key: 'id',
        }
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


category.hasMany(sub_category,
    {
        foreignKey: 'id',
        onDelete: 'CASCADE',
    }
);
sub_category.belongsTo(category,
    {
        foreignKey: 'id',
        onDelete: 'CASCADE', 
    }
);

module.exports = sub_category;