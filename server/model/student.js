//for creating model we require to import mongoose and then we can create schema
const mongoose = require('mongoose')    //importing mongoose
const studentSchema = new mongoose.Schema({                //creating a model                                          
    name:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        trim:true
    },
    phone_number:{
        type:Number
    },
    email:{
        type:String,
        trim:true

    },
    address:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model('Student',studentSchema) //api name, model name