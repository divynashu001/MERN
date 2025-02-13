const User = require("../models/user");
const express = require("express")
const router = express.Router();
router.use(express.json())

router.post("/", async(req, res)=>{
    let {name, email, age} = req.body;
    try{
        newUser = await User.create({
            name:name,
            email:email,
            age:age
        });
        console.log("New user Added")
        res.status(201).json(newUser)
        
    }catch(error){
        console.log(error.errmsg)
        res.status(400).json(error.errmsg)
    }
})

router.get("/", async(req, res)=>{
    
    try{
        let showAll = await User.find()
        res.status(200).json(showAll)
        
    }catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
})

router.get("/:id", async(req, res)=>{
    let {id} = req.params;
   try{
    const singleUser = await User.findById({_id:id})
    res.status(200).json(singleUser)
    
}catch(error){
    console.log(error)
    res.status(500).json(error.message)
}
})

router.delete("/:id", async(req, res)=>{
    let {id} = req.params;
   try{
    const deleteUser = await User.findByIdAndDelete({_id:id})
    res.status(200).json(deleteUser)
    
}catch(error){
    console.log(error)
    res.status(500).json(error.message)
}
})

router.patch("/:id", async(req, res)=>{
    let {id} = req.params;
    let {name, email, age} = req.body;
   try{
    const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(updateUser)
    
}catch(error){
    console.log(error)
    res.status(500).json(error.message)
}
})
module.exports = router;