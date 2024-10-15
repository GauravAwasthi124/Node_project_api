const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/verifytoken');
const SubCategoryController = require('../Controller/sub_category.controller');

router.get('/search', verifyToken, SubCategoryController.searchSubCategory);


router.get('/', verifyToken, SubCategoryController.getAllSubCategory);
router.get('/:id', verifyToken, SubCategoryController.getSubCategorybyid);


router.post('/', verifyToken, SubCategoryController.createSubCategory);
router.put('/:id', verifyToken,SubCategoryController.updateSubCategory);


router.delete('/:id', verifyToken, SubCategoryController.deleteSubCategorybyid);
router.delete('/', verifyToken, SubCategoryController.deleteAllSubCategory);


module.exports = router;