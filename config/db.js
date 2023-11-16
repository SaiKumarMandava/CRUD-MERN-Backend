const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.ATLAS_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // console.log(connect)
        console.log("MongoDB Connected Successfully!!!!")

    }catch(error){
        console.log("Could not connect to MongoDB",error)
    }
}

module.exports = connectDB;