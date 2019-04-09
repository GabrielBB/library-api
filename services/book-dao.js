async function getBooks(db) {
    const sql = 'SELECT * FROM Book';
    return await db.all(sql, []);
}

module.exports = { getBooks }