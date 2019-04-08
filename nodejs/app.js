const express=require('express');

var app=express();
 app.get('/', (req,res)=>{
     res.send("welcome my website");

 });
 app.get('/home', (req,res)=>{
     res.send("Home page");
 });
 app.get('/contact',(req,res)=>{
     res.send("contact us");
 });






app.listen(3000);