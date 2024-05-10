const express = require("express")
const Component = require("../models/component")
const router = express.Router()

let addCount  = 0;
let updateCount = 0;
router.post("/add",async (req,res)=>{
    try{
      addCount++;
       const componentData = req.body;
      const response = await Component.create({
         title:componentData.title,
         description:componentData.description,
       })
       if(!response){
        return res.status(500).json({msg:"Internal Server Error"})
       }
       return res.status(200).json(response)
    }
    catch(error){
        console.log(error)
        return res.status(500).json({msg:"Internal Server Error"})
    }
})

router.patch("/update/:componentId",async (req,res)=>{
    try{
         updateCount++;
         const componentId = req.params.componentId
         const newData = req.body;
         if(!newData){
            return res.status(404).json({msg:"fields are required "})
         }
         const componentData = await Component.findByIdAndUpdate(componentId,newData,{
            new:true,
         })

         return res.status(200).json(componentData)
    }  
    catch(error){
        console.log(error)
        return res.status(500).json({msg:"Internal Server Error"})
    }
})
router.get("/count",(req,res)=>{
    return res.status(200).json({
        addCount:addCount,
        updateCount:updateCount
    })
})

module.exports = router