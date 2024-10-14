const user = require('../Models/user.model');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');



exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await user.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const updateid = req.params.id;
        const { name, email, password } = req.body;
        
        const saltRounds_two = 10;
        const hashedPassword_two = await bcrypt.hash(password, saltRounds_two);
        const updateuser = await user.update(
            { 
                name: name, 
                email: email, 
                password: hashedPassword_two
            },
            { 
                where: { id: updateid } 
            }
        );
        res.status(200).json({message:"Data Updated successfully"})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const data = await user.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getUserByid = async (req, res) => {
    try {
        const id = req.params.id
        const userdata = await user.findByPk(id);
        if (!userdata){
            res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json(userdata);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.deleteUserByid = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteUser = await user.destroy({ where: { id: deleteId } });
        if (!deleteId) {
            res.status(404).json({ message: 'User Not Found' });
        }   
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.deleteAllUser = async (req, res) => {
    try {
        const deleteAll = await user.destroy({where: {},truncate: true});
        res.status(200).json({message:"All Users are Deleted"});
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}


exports.searchUsers = async (req, res) => {
    const {name, email } = req.query;
    try {
        const searchusers = await user.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${name}%` } }, 
                    {email: { [Op.like]: `%${email}%`}}
                ]
            }
        });
        if (searchusers.length === 0) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        res.json(searchusers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

