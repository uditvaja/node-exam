import express from 'express'
import adminmodel from '../models/admin.model.js'
import bcrypt from 'bcrypt'
 const logincontroller = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const admin = await adminmodel.findOne({ email });
        if (!admin) {
            console.log('user not found');
            res.redirect('/login');
            return;
        }
        const match = await bcrypt.compare(password, admin.password);
        if (!match) {
            console.log('wrong password');
            res.redirect('/login');
            return;
        }
        console.log('login succesful');
        req.user = admin; 
        res.redirect("/");
    } catch (error) {
        console.log("Error", error);
        res.redirect('/login');
    }
 }
 export default logincontroller