const mongoose = require("mongoose")

const componentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{timestamps:true})

const Component = mongoose.model("components",componentSchema)

module.exports = Component