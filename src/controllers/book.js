const router = require('express').Router();
const Book = require('../models/book');
const Page = require('../models/page');

module.exports = (db) => {

    const bookModel = new Book(db);
    const pageModel = new Page(db);

    // Get All Books
    router.get('/', async (req, res) => {
        try {
            res.json(await bookModel.findAll());
        } catch (e) {
            console.error(e)
            res.send(e);
        }
    });

    // Get Book by ID
    router.get('/:id', async (req, res) => {
        try {
            const bookId = req.params.id;
            const book = await bookModel.findById(bookId);

            const pages = await pageModel.findByBookId(bookId);
            book.pages = pages;

            res.json(book);
        } catch (e) {
            console.error(e)
            res.send(e);
        }
    });

    async function findPageByBookIdAndNumber(req) {
        const bookId = req.params.id;
        const pageNum = req.params.pageNum;
        return await pageModel.findByBookIdAndNumber(bookId, pageNum);
    }

    // Get Page Content by Page Number
    router.get(['/:id/page/:pageNum'], async (req, res) => {
        try {
            const page = await findPageByBookIdAndNumber(req);
            res.send(page.Content);
        } catch (e) {
            console.error(e);
            res.send(e);
        }
    });

    // Get Page Content in HTML format
    router.get(['/:id/page/:pageNum/html'], async (req, res) => {
        try {
            const page = await findPageByBookIdAndNumber(req);
            res.render('page', { content: page.Content });
        } catch (e) {
            console.error(e);
            res.send(e);
        }
    });

    return router;
};