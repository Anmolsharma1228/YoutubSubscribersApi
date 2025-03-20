const mongoose = require('mongoose');


const dbConnection = async() =>{
  try{
    mongoose.connect("mongodb://localhost:27017/youtube")
    const database = mongoose.connection;
    database.on("error", (error)=>{
      console.log(error);
    })

    database.once("connected", ()=>{
      console.log("Database connected successfully");
    })

  }catch(error){
    console.log(error);
  }
}

module.exports = dbConnection;