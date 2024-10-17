const category = require('../Models/category.model');
const { Op } = require('sequelize');
const sub_category = require('../Models/sub_category.model');

exports.CreateCategory = async (req, res) => {
    try {
        const { category_name, added_by, status } = req.body;
        const newCategory = await category.create({
            category_name,
            added_by,
            status
        });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.UpdateCategory = async (req, res) => {
    try {
        const updateid = req.params.id;
        const { category_name, added_by, status } = req.body;
        const updatecategory = await category.update(
            {
                category_name: category_name,
                added_by: added_by,
                status: status
            },
            {
                where: { id: updateid }
            }
        );
        res.status(200).json({ message: "Data Updated successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.getAllCategory= async (req, res) => {
    try {
        const data = await category.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getCategorybyid = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const userdata = await category.findByPk(id);
        if (!userdata) {
            res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json(userdata);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteCategorybyid = async (req, res) => {
    try {
        const deleteId = req.params.id;
        console.log(deleteId);
        await sub_category.destroy({ where: { category_id: deleteId } });
        const deleteUser = await category.destroy({ where: { id: deleteId } });
        if (!deleteId) {
            res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteAllCategory= async (req, res) => {
    try {
        const deleteAll = await category.destroy({ where: {}, truncate: true });
        res.status(200).json({ message: "All Users are Deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
};


exports.searchCategory = async (req, res) => {
    const {category_name} = req.query;
    try {
        const searchusers = await category.findAll({
            where: {
                [Op.or]: [
                    { category_name: { [Op.like]: `%${category_name}%` } },
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
