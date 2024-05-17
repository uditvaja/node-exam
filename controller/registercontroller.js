
import express from 'express'
import bcrypt from 'bcrypt'
import adminmodel from '../models/admin.model.js';
 const registercontroller = async(req,res)=>{

     try {
        const { username, password, confompassword, email } = req.body;
        if (password !== confompassword) {
            console.log("Passwords not match.....");
                  return;   
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new adminmodel({
            username: username,
            password: hashedPassword,
            email: email,
        });
        await admin.save();
        console.log("Admin added successfully:", admin);
        res.redirect("/login");
    } catch (error) {
        console.log("Error ", error);
       res.redirect("/login")
    }
}


export default registercontroller
