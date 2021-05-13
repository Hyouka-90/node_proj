const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId , required: true ,auto:true  },
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String]
});

const BooksModel = mongoose.model('books',bookSchema);

module.exports = BooksModel;




