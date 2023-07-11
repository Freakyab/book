const express = require('express');
const User=require('../models/user.model');

const router = express.Router();



router.get('/',async (req,res)=>{
    const users = await User.find({});
    res.send(users);
})

router.post('/createUser',async(req,res)=>{
    console.log("request came",req.body);
    let createdUser = await User.create(req.body);
    res.status(201).send(createdUser);
})


module.exports= router;
