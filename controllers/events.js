module.exports = (db) => {

    let eventPage = (request, response) => {
        let queryDone = (events) => {
            response.render('eventPage', {obj:events})
        }

        db.events.showAll(queryDone);
    };

    return {
        eventPage
    };
};