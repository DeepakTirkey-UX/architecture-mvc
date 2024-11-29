const express = require('express');
const router = express.Router();
const UserController=require('../Controllers/UserController');

router.post('/storeData', UserController.CreateUser);
router.get('/fetchUser',UserController.FetchUser);
router.get('/singleUser/:id',UserController.singleUser);
router.patch('/UpdateUserData/:id',UserController.UpdateUserData);
router.put('/updateUser/:id',UserController.updateUser)
router.delete('/deleteUser/:id',UserController.deleteUser);
module.exports = router;