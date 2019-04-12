const express=require('express');

const booksRouter=express.Router();//create new router
const Bookdata = require('../model/Bookdata');

function router(nav){

    booksRouter.route('/')
        .get((req,res)=>{
           Bookdata.find()
            .then(function(books){
                res.render('books',{nav,title:"Library",books});
            });
        });
     booksRouter.route('/:id')
        .get((req,res)=>{
             const id= req.params.id;
             Bookdata.findOne({_id:id})
             .then(function(book){
                 res.render('book',
                {
                     nav,
                     title:"Library",
                     book
                 });
             });
         });
      return booksRouter;

    }
    module.exports=router;