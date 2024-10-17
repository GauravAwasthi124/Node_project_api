const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

<<<<<<<< HEAD:Models/users.model.js
const users = sequelize.define('user', {
    name: {
========
const category = sequelize.define('category', {
    category_name: {
>>>>>>>> origin/main:Models/category.model.js
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
<<<<<<<< HEAD:Models/users.model.js
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
========
}, {
    tableName: 'category',
    timestamps: true
});

module.exports = category;
>>>>>>>> origin/main:Models/category.model.js
