const sub_category = require('../Models/sub_category.model');
const { Op } = require('sequelize');
<<<<<<< HEAD
const category = require('../Models/category.model');
=======
>>>>>>> origin/main

exports.createSubCategory = async (req, res) => {
    try {
        const { category_id, sub_category_name, added_by, status } = req.body;
        const newSubCategory = await sub_category.create({
            category_id,
            sub_category_name,
            added_by,
            status
        })
        res.status(201).json(newSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateSubCategory = async (req, res) => {
    try {
        const updateid = req.params.id;
        const { category_id, sub_category_name, added_by, status } = req.body;
        const updateSubCategory = await sub_category.update({
            category_id: category_id,
            sub_category_name: sub_category_name,
            added_by: added_by,
            status: status
        }, {
            where: { id: updateid }
        });
        res.status(201).json(updateSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllSubCategory = async (req, res) => {
    try {
<<<<<<< HEAD
        const data = await sub_category.findAll(
            {
                include: [
                    {
                        model: category,
                        attributes: ['category_name'],
                    }
                ],
                attributes: ['id', 'sub_category_name', 'added_by', 'status'],
            }
        );
=======
        const data = await sub_category.findAll();
>>>>>>> origin/main
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getSubCategorybyid = async (req, res) => {
    try {
        const id = req.params.id
<<<<<<< HEAD
        const userdata = await sub_category.findByPk(id, {
            include: [
                {
                    model: category,
                    attributes: ['category_name'],
                }
            ],
            attributes: ['id', 'sub_category_name', 'added_by', 'status'],
        });
=======
        const userdata = await sub_category.findByPk(id);
>>>>>>> origin/main
        if (!userdata) {
            res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json(userdata);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteSubCategorybyid = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteUser = await sub_category.destroy({ where: { id: deleteId } });
        if (!deleteId) {
            res.status(404).json({ message: 'User Not Found' });
        }
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteAllSubCategory = async (req, res) => {
    try {
        const deleteAll = await sub_category.destroy({ where: {}, truncate: true });
        res.status(200).json({ message: "All Users are Deleted" });
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
};


exports.searchSubCategory = async (req, res) => {
    const { category_name } = req.query;
    try {
        const searchusers = await sub_category.findAll({
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
