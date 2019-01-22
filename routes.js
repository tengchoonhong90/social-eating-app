module.exports = (app, db) => {
    const users = require('./controllers/users')(db);
    const events = require('./controllers/events')(db);

    //users
    app.get('/users/login', users.loginPage);
    app.post('/users/regNew', users.regNew);
    app.post('/users/logIn', users.login);
    app.get('/users/logout', users.logout);

    //events
    app.get('/events', events.eventPage);
    
    //groups
};