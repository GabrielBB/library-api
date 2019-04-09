class Page {

    constructor(db) {
        this.db = db;
    }

    async findByBookId(bookId) {
        const sql = 'SELECT PageNumber FROM Page WHERE BookID = ?';
        return (await this.db.all(sql, [bookId])).map(p => p.PageNumber);
    }

    async findByBookIdAndNumber(bookId, pageNumber) {
        const sql = 'SELECT * FROM Page WHERE BookID = ? AND PageNumber = ?';
        return await this.db.get(sql, [bookId, pageNumber]);
    }
}

module.exports = Page;