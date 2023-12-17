const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users.js")
const authRoute = require("./routes/auth.js")

const app = express()
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`Connected to mongodb database`)
})
.catch((error)=>{
    console.log(`Error while connecting to mongodb. Error: ${error}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on: ${process.env.PORT}`)
})

