const port = process.env.PORT || 3000;
const express = require("express");
const initDb = require('./utils/database');
const bookDao = require('./services/book-dao');

(async () => {
    const db = await initDb();

    const app = express();

    app.get('/book', async (req, res) => {
        res.json(await bookDao.getBooks(db));
    });

    app.listen(port, () => {
        console.log("Server running on port " + port);
    });

})();