const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require ('./db');

const app = express();

app.use(express.static(__dirname+'/public/'));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

require('./routes')(app, db);


app.get('/', (request, response) => {
    response.render("home")
})




const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`*** Listening on Port ${PORT} ***`));

let onClose = () => {
    server.close( () => {
        console.log('Process Terminated')
        db.pool.end( () => console.log('Shut down db connection pool'))
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);