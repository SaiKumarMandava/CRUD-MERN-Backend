const express = require('express')
const Student = require('../model/student')




exports.createStudent = async (req, res) => {
    //validation for phone and email
    try {
     
      const studentPhone = await Student.findOne({
        phone_number: req.body.phone_number,
      });
  
     
      const studentEmail = await Student.findOne({
        email: req.body.email,
      });
  
      if (studentPhone) {
        return res.status(400).json({ error: "Phone number already exists" });
      }
  
      if (studentEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }
      if(studentPhone || studentEmail){
        return res.status(400).json({error:"Student already exist"})
      }
      // If not found, create and save the new student
      const student = new Student(req.body);
      await student.save();
      res.status(201).json({ msg: "Student successfully created", student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };
  
exports.getStudent = async (req,res)=>{
    try{

        const student = await Student.find()
         res.status(200).json({msg:"Succesfully fetched all students",student})

    }catch(error){
        console.log("Error",error)
    }

}

exports.getOneStudent = async (req,res)=>{
    try{
        
        const student = await Student.findById(req.params.id)
         res.status(200).json({msg:"Succesfully fetched one student",student})

    }catch(error){
        console.log("Error",err)
        res.status(404).json({Msg:"Error",error})
    }

}

exports.updateStudent = async (req,res)=>{
    console.log(req.body)
    try{
          
        
        const student = await Student.findByIdAndUpdate({_id:req.params.id},req.body)
            console.log(student)
            res.status(200).json({msg:"Student updated succesfully",student})

    }catch(error){
        console.log("Error",error)
    }

}


exports.deleteStudent = async (req,res)=>{
    try{
        const student = await Student.findByIdAndDelete({_id:req.params.id})            
        console.log(student)
        res.status(500).json({msg:"Student deleted succesfully",student})

    }catch(error){
        console.log("Error",err)
    }

}