const Database = require('sqlite-async');
const fs = require('fs');

async function initDb() {
    try {
        const db = await Database.open(':memory:');

        const sql = fs.readFileSync('./utils/squema.sql', 'utf8');
        await db.exec(sql);

        console.log('Sucessfully connected to In-Memory Database')

        return db;
    } catch (ex) {
        throw new Error('Exception while initializing database: ' + ex)
    }
}

module.exports = initDb;