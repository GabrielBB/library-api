const expect = require('chai').expect;

const initDb = require('../src/helpers/database');
const Book = require('../src/models/book');
const Page = require('../src/models/page');

describe('Testing Book Model', function () {

    it('Should return some books', async () => {
        let db;

        try {
            db = await initDb();

            const bookModel = new Book(db);

            const books = await bookModel.findAll();

            expect(books).to.be.an('array').that.does.not.equal([]);
        } finally {
            if (db) {
                db.close();
            }
        }
    });

    it('There should be a book with ID 1 and should have the squema properties', async () => {
        let db;

        try {
            db = await initDb();

            const bookModel = new Book(db);

            const book = await bookModel.findById(1);

            expect(book).to.have.property('ID');
            expect(book).to.have.property('Title');
            expect(book).to.have.property('Description');
            expect(book).to.have.property('Author');
            expect(book).to.have.property('CreationDate');
        } finally {
            if (db) {
                db.close();
            }
        }
    });

});

describe('Testing Page Model', function () {

    it('Should return some pages', async () => {
        let db;

        try {
            db = await initDb();

            const pageModel = new Page(db);

            const pages = await pageModel.findByBookId(1);

            expect(pages).to.be.an('array').that.does.not.equal([]);
        } finally {
            if (db) {
                db.close();
            }
        }
    });
});