import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/admin").then(()=>{
  console.log("mongodb connected ...");  
}).catch((err)=>{
    console.log(err);
})
export default mongoose