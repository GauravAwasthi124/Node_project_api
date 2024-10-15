const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/verifytoken');
const CategoryController = require('../Controller/category.controller');

router.get('/search', verifyToken, CategoryController.searchCategory);


router.get('/', verifyToken, CategoryController.getAllCategory);
router.get('/:id', verifyToken, CategoryController.getCategorybyid);


router.post('/', verifyToken, CategoryController.CreateCategory);
router.put('/:id', verifyToken, CategoryController.UpdateCategory);


router.delete('/:id', verifyToken, CategoryController.deleteCategorybyid);
router.delete('/', verifyToken, CategoryController.deleteAllCategory);


module.exports = router;
