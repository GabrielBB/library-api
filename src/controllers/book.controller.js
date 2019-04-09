const router = require('express').Router();
const bookService = require('../services/book.service');

module.exports = (db) => {

    // Get All Books
    router.get('/', async (req, res) => {
        try {
            res.json(await bookService.getBooks(db));
        } catch (e) {
            res.send(e);
        }
    });

    // Get Book by ID
    router.get('/:id', async (req, res) => {
        try {
            const id = req.params.id;
            res.json(await bookService.getBookById(id, db));
        } catch (e) {
            res.send(e);
        }
    });

    return router;
};