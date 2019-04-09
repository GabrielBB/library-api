class Book {

    constructor(db) {
        this.db = db;
    }

    async findAll() {
        const sql = 'SELECT * FROM Book';
        return await this.db.all(sql);
    }

    async findById(id) {
        const sql = 'SELECT * FROM Book WHERE ID = ?';
        return await this.db.get(sql, [id]);
    }
}

module.exports = Book;