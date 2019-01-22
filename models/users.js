module.exports = (dbPoolInstance) => {

    const sha256 = require('js-sha256');

    const registerNew = (user, callback) => {
        const conflictQuery = `SELECT username FROM users WHERE username = '${user.username}';`;

        dbPoolInstance.query(conflictQuery, (err, conflictResults) => {
            console.log(conflictResults.rows)
            console.log('body username ' + user.username)

            if (conflictResults.rows.length > 0) {
                console.log('NULL')
                callback(null, null)
            } else {
                console.log('inserting')
                const string = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`;
                const hashPw = sha256(user.password);
                const values = [
                    user.username,
                    hashPw,
                    user.email
                ];

                dbPoolInstance.query(string, values, (err, results) => {
                    if (err) {
                        console.log("query error", err)
                        callback(err, null);
                    } else {
                        if (results.rows.length > 0) {
                            callback(null, results.row[0]);
                        } else {
                            callback(null, null);
                        }
                    }
                });
            }
        });
    };

    const logInUser = (user, callback) => {
        const string = `SELECT password FROM users WHERE username = '${user.username}';`;
        const hashPw = sha256(user.password);

        dbPoolInstance.query(string, (err, results) => {
            if (results.rows[0].password == hashPw) {
                callback(null, results);
            } else {
                callback(null, null);
            }
        })
    }


    return {
        registerNew,
        logInUser,
    };
};