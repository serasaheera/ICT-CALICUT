const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryAppMongoose');
const schema = mongoose.Schema;


var NewBookSchema = new schema({
    title: String,
    auther: String,
    genre: String
});
var Bookdata = mongoose.model("Book_data", NewBookSchema);//model creatn

module.exports = Bookdata;