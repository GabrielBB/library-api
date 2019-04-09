async function getPagesByBook(bookId, db) {
    const sql = 'SELECT PageNumber FROM Page WHERE BookID = ?';
    return await db.all(sql, [bookId]);
}

async function getPageByNumber(bookId, pageNumber, db) {
    const sql = 'SELECT * FROM Page WHERE BookID = ? AND PageNumber = ?';
    return await db.get(sql, [bookId, pageNumber]);
}

module.exports = { getPagesByBook, getPageByNumber }