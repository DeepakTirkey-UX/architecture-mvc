const {render, name}=require('ejs');
const UserMasterModel=require('../Model/UserMaster');
exports.createUser=async (req,res) => {
    let body=req.body;
    if (!body || !body.name || !body.email || !body.mobile || !body.password || !body.role) {
        return res.redirect('signup', {message:'All fields are Require'});
    }else{
        const user=await UserMasterModel.create({
            name:body.name,
            email:body.email,
            mobile:body.mobile,
            password:body.password,
            role:body.role
        })
    return res.redirect('/signup')
    }
}

exports.login=async (req,res)=>{
    const body=req.body;
    const user=await UserMasterModel.find({email:body.email,password:body.password});
    const id=user[0]._id;
    if(user[0].role==='admin'){
        return res.redirect('/admin')
    }else{
        const user=await UserMasterModel.findById(id);
        return res.render('user', {userData:user});
    }
}

exports.forgotpassword = async (req, res) => {
    const body = req.body;
    console.log(body);

    if (!body.email || !body.newpassword || !body.repassword) {
        return res.render('forgotpassword', { 'message': 'All Fields Are Required' });
    } else {
        if (body.newpassword === body.repassword) {
            await UserMasterModel.findOneAndUpdate(
                { email: body.email },
                { password: body.newpassword },
                { new: true }
            );
            return res.redirect('/login');
        } else {
            return res.render('forgotpassword', { 'message': 'Password Miss Match' });
        }
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    await UserMasterModel.findByIdAndDelete(id);
    return res.redirect('/admin');
};

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await UserMasterModel.findByIdAndUpdate(
        id,
        {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        }
    );
    return res.redirect('/admin');
};


