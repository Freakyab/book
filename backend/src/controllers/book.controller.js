const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();

router.get("/",async(req,res)=>{
    let allOrders = await Book.find({});
    res.status(200).send(allOrders);

});

router.get("/getBooking/:bookingId",async(req,res)=>{
    console.log(req.params.bookingId);
    let orders = await Book.findById(req.params.bookingId).populate('theater').populate('movieid').lean().exec();
    console.log(orders);
    res.status(200).send(orders);
});

router.post("/create",async(req,res)=>{

    // console.log(req.body)
    let createBooking=await Book.create({...req.body});
    console.log(createBooking);
    res.status(201).send(createBooking);

})

router.patch("/update/:id",async(req,res)=>{
    console.log(req.params.id,req.body);
    let updatedBooking=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
    // console.log(updatedBooking);
    res.status(201).send(updatedBooking);

})

module.exports=router;