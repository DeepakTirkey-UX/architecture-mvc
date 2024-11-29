const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=8000;
const path=require('path');

mongoose.connect('mongodb://localhost:27017/mvc_user_master')
.then(()=>{
    console.log('Mongodb Connected Successfully');
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine', 'ejs');
app.set('views', path.resolve('./Views'));
const apiRouter=require('./Routes/ApiRoute');
const StaticRouter=require('./Routes/staticRoute');
app.use(express.urlencoded({extended:false}));
app.use('/',StaticRouter);
app.use('/api',apiRouter);
app.listen(port,()=>{
    console.log(`Server runing on the port ${port}`);
})