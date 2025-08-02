const express=require('express');

const router=express.Router();

const User=require('../models/user')


router.post('/',async(req,res)=>{
    const user=await User.create(req.body);
    res.json(user);
})

router.get('/:id',async(req,res)=>{
    const users=await User.find();
    res.json(users);
})

router.get('/:id',async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.json(user)
})

module.exports=router;