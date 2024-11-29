const express=require('express');
const apiRoute=express.Router();
const UserController=require('../Controllers/UserController');
apiRoute.post('/createUser', UserController.createUser);
apiRoute.post('/login',UserController.login);
apiRoute.post('/forgotpassword',UserController.forgotpassword);

apiRoute.get('/deleteUser/:id',UserController.deleteUser);
apiRoute.post('/updateUser/:id',UserController.updateUser);
module.exports=apiRoute;