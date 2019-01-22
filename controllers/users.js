module.exports = (db) => {
    const sha256 = require('js-sha256');

    let loginPage = (request, response) => {
        response.render('loginPage')
    }

    let regNew = (request, response) => {
        db.users.registerNew(request.body, (err, users) => {
            if (err) {
                console.log('error creating user:', err);
                response.status(500);
            } else {
                console.log('User created successfully');
                let hashuser = sha256(request.body.username + "SUGAR")
                response.cookie('loggedIn', true);
                response.cookie('username', hashuser);
            }
            response.redirect('/');
        })
    }

    let login = (request, response) => {
        db.users.logInUser(request.body, (err, users) => {
            response.redirect('/')
        })
    }

    let logout = (request, response) => {
        response.clearCookie('loggedIn');
        response.clearCookie('username');
        response.redirect('/');
    }

    return {
        loginPage,
        regNew,
        login,
        logout,
    };
};