require("dotenv").config()
const express = require("express")
const {connectMongoDB} = require("./connection")
const componentRoute = require("./routes/component")

const app = express()
const PORT = process.env.PORT || 1240

connectMongoDB(process.env.MONGO_URL)
.then(()=>console.log("MongoDB is connected"))
.catch(()=>console.log("There is some error"))

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    return res.send("From the server")
})
app.use("/component",componentRoute)

app.listen(PORT,()=>{
    console.log("Server is running")
})

