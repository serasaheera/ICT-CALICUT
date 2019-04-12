const express=require('express');
const chalk=require('chalk');


const path=require('path');

var app=new express();//object creation

app.set('views','./src/views');//views-keyword
app.set('view engine','ejs');
const nav=[

    {link:'/books',title:'Books'},
    {link:'/authors',title:"Authors"},
    {link:'/addBook',title:"Addbook"}
];
const booksRouter=require('./src/routes/bookRoutes')(nav);//create new router&passing nav to bookRoutes
app.use(express.static(path.join(__dirname,"/public")))
app.use('/books',booksRouter);
const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use('/addBook',adminRouter);



app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:"Library"
}
);
});













app.listen(3000, function(){
    console.log('listening to port'+chalk.green('3000'))
});