const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/verifytoken');
const userController = require('../Controller/users.controller');

router.get('/search',verifyToken ,userController.searchUsers);


router.get('/',verifyToken ,userController.getAllUsers);
router.get('/:id',verifyToken ,userController.getUserByid); 


router.post('/',verifyToken ,userController.createUsers);
router.put('/:id',verifyToken ,userController.updateUser);


router.delete('/:id',verifyToken ,userController.deleteUserByid); 
router.delete('/',verifyToken ,userController.deleteAllUser);


module.exports = router;