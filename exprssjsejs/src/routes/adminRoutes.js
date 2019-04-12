const express=require('express');

const adminRouter=express.Router();//create new router


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
    res.send("Inserting Books........");

});


        
      return adminRouter;

    }
    module.exports=router;