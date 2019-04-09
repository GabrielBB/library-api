const Database = require('sqlite-async');
const fs = require('fs');

async function initDb() {
    try {
        const db = await Database.open(':memory:');

        const sql = fs.readFileSync('./src/helpers/squema.sql', 'utf8');
        await db.exec(sql);
        return db;
    } catch (ex) {
        throw new Error('Exception while initializing database: ' + ex)
    }
}

module.exports = initDb;