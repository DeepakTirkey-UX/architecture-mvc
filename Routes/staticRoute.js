const { render } = require('ejs');
const express=require('express');
const UserMasterModel = require('../Model/UserMaster');
const StaticRouter=express.Router();

// CH1
// const UserController=require('../Controllers/UserController');
// StaticRouter.get('/',UserController.home);
// StaticRouter.get('/about',UserController.about);
// StaticRouter.get('/contact',UserController.contact);


// CH2
StaticRouter.get('/',(req,res)=>{
    return res.render('index');
});
StaticRouter.get('/about',(req,res)=>{
    return res.render('about');
});
StaticRouter.get('/contact',(req,res)=>{
    return res.render('contact');
});
StaticRouter.get('/login',(req,res)=>{
    return res.render('login');
});
StaticRouter.get('/signup',(req,res)=>{
    return res.render('signup');
});
StaticRouter.get('/admin', async (req,res)=>{
    const user=await UserMasterModel.find({role:'user'});
    return res.render('admin', {user:user});
})

StaticRouter.get('/forgotpassword', (req, res) => {
    return res.render('forgotpassword');
})

StaticRouter.get('/editUser/:id', async(req, res) => {
    const id=req.params.id;
    const user=await UserMasterModel.findById(id);
    console.log(user);
    return res.render('editUser',{'user':user});
})

module.exports=StaticRouter;