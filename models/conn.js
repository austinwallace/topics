const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'rankings',
    user: 'admin'
}

const db = pgp(options);

module.exports = db;