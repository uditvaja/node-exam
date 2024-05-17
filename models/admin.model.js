import mongoose from "mongoose";

const adminschema = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    password:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    }
})

const adminmodel=mongoose.model('admincollection',adminschema);

export default adminmodel