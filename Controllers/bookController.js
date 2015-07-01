/**
 * Created by buggy on 6/30/15.
 */
var bookController = function (Book) {

    var get = function (req, res) {

        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre
        }

        Book.find(query, function (err, books) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                var returnBook = [];
                books.forEach(function (elem, index, arr) {
                    var newBook = elem.toJSON();
                    newBook.links = {};
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    returnBook.push(newBook);
                });

                res.json(returnBook);
            }
        });
    };

    var post = function (req, res) {
        var book = new Book(req.body);
        book.save();
        res.status(201).send(book);
    };

    return {
        post: post,
        get: get
    }

};

module.exports = bookController;