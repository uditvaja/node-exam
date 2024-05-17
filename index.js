import express from "express"
import db from './config/db.js'
import bodyParser from "body-parser";
import routes from "./routes/route.js";
const app=express();
 let port = 3000;
 
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/',routes)
app.listen(port,()=>{
    console.log("server start and runing on "+port);
})
