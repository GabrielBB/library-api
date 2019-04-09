async function getBooks(db) {
    const sql = 'SELECT * FROM Book';
    return await db.all(sql);
}

async function getBookById(id, db) {
    const sql = 'SELECT * FROM Book WHERE ID = ?';
    return await db.get(sql, [id]);
}

module.exports = { getBooks, getBookById }