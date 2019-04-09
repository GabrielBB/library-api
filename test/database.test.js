const assert = require('assert');
const expect = require('chai').expect;

const initDb = require('../src/helpers/database');

describe('Testing database connection', function () {

    it('Database connection should not return errors', async() => {
        let db;

        try {
            db = await initDb();
        } finally {
            if (db) {
                db.close();
            }
        }
    });

});