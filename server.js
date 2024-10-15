const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Connection/connection');
const app = express();
const cors = require('cors');
// Load environment variables from .env file
require('dotenv').config();

// Access PORT and SECRET_KEY from environment variables
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());


app.use(cors());
// Routes calling


//login router
const loginRoutes = require('./Routes/login.route');
app.use('/api/user/', loginRoutes);


// profile router
const profileRoutes = require('./Routes/profile.route');
app.use('/api/user/', profileRoutes);

// users route
const usersRoutes = require('./Routes/users.route');
app.use('/api/users/', usersRoutes);



const categoryRoutes = require('./Routes/category.route');
app.use('/api/category', categoryRoutes);


const subcategoryRoutes = require('./Routes/sub_category.route');
app.use('/api/sub_category/',subcategoryRoutes);

// Sync database
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Unable to sync database:', error);
});
