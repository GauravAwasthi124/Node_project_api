const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/connection');

<<<<<<< HEAD
const category = sequelize.define('category', {
    id: {  
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
    },
    category_name: {
=======
<<<<<<<< HEAD:Models/users.model.js
const users = sequelize.define('user', {
    name: {
========
const category = sequelize.define('category', {
    category_name: {
>>>>>>>> origin/main:Models/category.model.js
>>>>>>> origin/main
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/main
}, {
    tableName: 'category',
    timestamps: true
});

<<<<<<< HEAD
module.exports = category;
=======
module.exports = category;
>>>>>>>> origin/main:Models/category.model.js
>>>>>>> origin/main
