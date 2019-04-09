const port = process.env.PORT || 3000;

const path = require('path');
const express = require("express");
const exphbs = require('express-handlebars');

const bookController = require('./controllers/book');
const initDb = require('./helpers/database');

(async () => {
    const db = await initDb();

    const app = express();
    app.engine('handlebars', exphbs());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '/views'));

    // --- Controllers registration ----
    app.use('/book', bookController(db));
    // ----------------------------------

    app.listen(port, () => {
        console.log("Server running on port " + port);
    });

})();