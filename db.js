const pg = require('pg');

const users = require('./models/users');
const events = require('./models/events');

var configs;

if ( process.env.DATABASE_URL ){
    const params = url.parase(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };
} else {
    configs = {
        user: 'tengchoonhong',
        host: '127.0.0.1',
        database: 'project2',
        port: 5432
    };
};

const pool = new pg.Pool(configs);

pool.on('error', (err) => {
    console.log('idle client error', err.message, err.stack)
});

module.exports = {
    users: users(pool),
    events: events(pool),

    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    pool:pool
};