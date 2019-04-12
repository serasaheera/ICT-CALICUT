const express=require('express');

const adminRouter=express.Router();//create new router
const Bookdata=require('../model/Bookdata');


function router(nav){
        adminRouter.route('/')
        .get((req,res)=>{
            res.render(
                'addBook',
                {
                nav,
                title:"ADMIN",
        
                }
        );
        });
    adminRouter.route('/add')
    .get((req,res)=>
{
    var item = {
        title : req.param('title'),
        auther : req.param('author'),
        genre : req.param('genre')
    }
    var book = new Bookdata(item);
    book.save();
    res.redirect('/books');
});
     return adminRouter;

    }
    module.exports=router;