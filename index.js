const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/bookstore', {
    "auth": {
        "authSource": "admin"
      },
      "user": "admin",
      "pass": "1234",    
useNewUrlParser: true});


const PORT = process.env.PORT|| 9000;

app.use(express.json());

app.get('/allbook',async(req,res) => {
    const books = await Book.find()
  res.json(books)

})

app.get('/book/:titleParam', async (req,res) =>{
    var { titleParam } = req.params;
    const books = await Book.find({title: { $regex: '.*' + titleParam + '.*' } });
    res.json(books);
})

app.get('/bookById/:id', async (req,res) =>{
    
try {

    const { id } = req.params
    const books = await Book.find({_id: id});
    console.log(books);
    res.send(books);
    }
    catch(e){
        console.log('Catch an error:',e);
    }
})


app.listen(PORT,() => {
    console.log('Server is running on port : '+PORT )
})

module.exports = app
