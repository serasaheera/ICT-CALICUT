const express=require('express');

var app=express();
 app.get('/', (req,res)=>{
     res.send("welcome my website");

 });
 app.get('/home', (req,res)=>{
     res.send(' [{"name":"Tom","Age":23},{"name":"Riya","Age":22},{"name":"Manu","Age":24}]');
 });
 app.get('/contact',(req,res)=>{
     res.send("contact us");
 });






app.listen(3000);