var express = require('express');
var router = express.Router();
var Book = require('../Model/Book')

router.get('/', function (req, res, next) {
    Book.find(function (err, bookList) {
        if (err) return next(err);
        res.render('book', {data: bookList || []});
        // res.json(emailList);
    });
});

router.get('/:id', function (req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.get('/hello', (req, res) => {
    res.send('hello world from user')
})


router.post('/', (req, res) => {
    Book.create(req.body, function (err, post) {
        if (err) {
            res.send(err);
            //return next(err);
        } else {
            // res.json(post);
            Book.find(function (err, bookList) {
                if (err) return next(err);
                res.render('book', {data: bookList || []});
                // res.json(emailList);
            });
        }
    });
})

router.put('/:id', function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
