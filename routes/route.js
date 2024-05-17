import express from 'express';
import logincontroller from '../controller/logincontroller.js';
import registercontroller from '../controller/registercontroller.js';
let routes=express();
routes.get('/',(req,res)=>{
    res.render('home');
})

routes.get('/login',(req,res)=>{
    res.render('login');
})
routes.get('/register',(req,res)=>{
    res.render('register')
})
routes.post('/register',registercontroller);
routes.post('/login',logincontroller);

export default routes