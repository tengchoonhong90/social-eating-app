module.exports = (dbPoolInstance) => {

    let showAll = (callback) => {
        const string = `SELECT * FROM events;`;

        dbPoolInstance.query(string, (err, results) => {
            if (err) {
                console.log('query error', err);
            } else {
                callback(results);
            }
        });
    }

    

    return{
        showAll,
    }
};