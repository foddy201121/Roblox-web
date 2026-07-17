require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.static('public'));
app.post('/login',(req,res)=>res.json({success:req.body.passkey===process.env.PASSKEY}));
app.post('/fps',(req,res)=>res.json({success:true,user:req.body.username}));
app.listen(process.env.PORT||3000);
