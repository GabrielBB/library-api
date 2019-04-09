const port = process.env.PORT || 3000;

const express = require("express");
const bookController = require('./controllers/book');
const initDb = require('./helpers/database');

(async () => {
    const db = await initDb();
    const app = express();

    // --- Controllers registration ----
    app.use('/book', bookController(db));
    // ----------------------------------

    app.listen(port, () => {
        console.log("Server running on port " + port);
    });

})();