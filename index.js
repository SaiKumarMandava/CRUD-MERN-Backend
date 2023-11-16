const express = require('express')
const app = express()
const cors=require('cors')

const dotenv = require('dotenv')
const connectDB = require('./config/db')


const Student = require('./server/router/student')


 
dotenv.config()


app.listen('5000',()=>console.log("Server is running"))
connectDB()
app.use(cors())

app.use(express.json())

app.use('/api',Student)

 
 