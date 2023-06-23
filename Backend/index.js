const express=require("express");
const app=express();
const mongoose= require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const cors =require("cors");
//CONNECTION TO MUNGODB
mongoose.connect(MONGO_DB_CONFIG.DB,{
useNewUrlParser: true,
useUnifiedTopology:true
}).then(()=> {
    console.log('connection to  MongoDB Successful');
}).catch((error) =>{
    console.log('Error connecting to MongoDB:',error);
});
//Enable Cors
app.use(cors());
//Middleware to parse JSON data
app.use(express.json());
//define a route to fetch the data
app.use("/api",require("./router/app.route"));
//start the server
app.listen(8010, ()=>{
   console.log("server started on port 8001");
});
