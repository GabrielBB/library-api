const router = require('express').Router();
const bookService = require('../models/book');
const pageService = require('../models/page');

module.exports = (db) => {

    // Get All Books
    router.get('/', async (req, res) => {
        try {
            res.json(await bookService.getBooks(db));
        } catch (e) {
            console.error(e)
            res.send(e);
        }
    });

    // Get Book by ID
    router.get('/:id', async (req, res) => {
        try {
            const bookId = req.params.id;
            const book = await bookService.getBookById(bookId, db);

            const pages = await pageService.getPagesByBook(bookId, db);
            book.pages = pages;

            res.json(book);
        } catch (e) {
            console.error(e)
            res.send(e);
        }
    });

    async function getPageByNumber(req) {
        const bookId = req.params.id;
        const pageNum = req.params.pageNum;
        return await pageService.getPageByNumber(bookId, pageNum, db);
    }

    // Get Page Content by Page Number
    router.get(['/:id/page/:pageNum'], async (req, res) => {
        try {
            const page = await getPageByNumber(req);
            res.send(page.Content);
        } catch (e) {
            console.error(e);
            res.send(e);
        }
    });

    // Get Page Content in HTML format
    router.get(['/:id/page/:pageNum/html'], async (req, res) => {
        try {
            const page = await getPageByNumber(req);
            res.sendFile('page.html', { root: './src/views' });
        } catch (e) {
            console.error(e);
            res.send(e);
        }
    });

    return router;
};