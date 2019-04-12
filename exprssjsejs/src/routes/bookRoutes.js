const express=require('express');

const booksRouter=express.Router();//create new router

function router(nav){


var books=[
    {
        title:"War and Peace",
        genre:"Historical Fiction",
        auther:"Lev Nicolayevich"
    },
    {
        title:"Bhoomiyude Avakashikal",
        genre:"comedy",
        auther:"vaikom Muhammed Basheer"
    },
    {
        title:"Meluha",
        genre:"Fantasy",
        auther:"Amish"
    }];

        booksRouter.route('/')
        .get((req,res)=>{
            res.render(
                'books',
                {
                nav,
                title:"BOOKS",
                books
                }
        );
        });
        booksRouter.route('/:id')
         .get((req,res)=>{
             const id= req.params.id;

             res.render(
                 'book',
                 {
                     nav,
                     title:"Library",
                     book: books[id]
                 }
             );
         }
        );
      return booksRouter;

    }
    module.exports=router;