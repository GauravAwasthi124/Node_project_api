const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../Models/user.model');


require('dotenv').config();


exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {

        // Check the user
        const users = await user.findOne({ where: { email } });
        if (!users) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }


        // check password with the stored hashed password
        const isMatch = await bcrypt.compare(password, users.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password.' });
 
        }

        //creation of token
        const token = jwt.sign(
            {
                users:
                {
                    id: users.id,
                    name: users.name,
                    email: users.email
                }
            },
            process.env.SECRET_KEY,
            
        );
        res.json({ token });
        
    }catch (error) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
}