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
const userRoutes = require('./Routes/user.route');
app.use('/api/user/', userRoutes);
const loginRoutes = require('./Routes/login.route');
app.use('/api/user/', loginRoutes);

const profileRoutes = require('./Routes/profile.route');
app.use('/api/user/', profileRoutes);




// Sync database
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Unable to sync database:', error);
});
