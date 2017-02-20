/*var express = require('express');
var bodyParser = require('body-parser');
var Genre = require('../Models/genre');

var router = express.Router();             

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); 
});

router.route('/genres')
    .post(function(req, res) {
        var Genre = new Genre(req.body);     
        Genre.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Genre created!' });
        });

    })
    .get(function(req, res) {
        Genre.find(function(err, genres) {
            if (err)
                res.send(err);

            res.json(genres);
        });
    });

    module.exports = router;
*/