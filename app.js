var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

Genre = require('./model/genre');
Book = require('./model/books');
// var genreRouter = require('./Controllers/genre');
app.get('/', function(req, res) {
    res.send("hello World!!");
});

app.get('/api/geners', function(req, res) {
    Genre.getGenres(function(err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);

    });
});
app.post('/api/geners', function(req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function(err, genreRes) {
        if (err) {
            throw err;
        }
        res.json(genreRes);
    });
});
app.put('/api/geners/:_id', function(req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genreRes) {
        if (err) {
            throw err;
        }
        res.json(genreRes);
    });
});
app.delete('/api/geners/:_id', function(req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genreRes) {
        if (err) {throw err; }
        res.json(genreRes);
    });
});
app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});
app.get('/api/books/:_id', function(req, res) {
    Book.getBookById(req.params._id, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});
app.post('/api/books', function(req, res) {
    var book = req.body;
    Book.addBook(book, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});
app.put('/api/books/:_id', function(req, res) {
    var id = req.params._id;var book = req.body;
    Book.updateBook(id,book,{}, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});
app.delete('/api/books/:_id', function(req, res) {
    var id = req.params._id;var book = req.body;
    Book.deleteBook(id, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});
app.listen(8000);
console.log("Running on port 8000");
