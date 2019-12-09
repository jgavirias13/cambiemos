require('dotenv').config();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

const logger = require('morgan');
const express = require('express');
const app = express();
const router = express.Router();
const body = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

if(environment == 'DEV'){
    app.use(logger('dev'));
}

app.use(body.urlencoded({
    extended: true
}));
app.use(body.json());
app.use('/api', routes(router));

const dbString = stage.dbHost + stage.dbName;
mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Db connection error: '));

if(!db){
    console.log('Error connecting to DB');
}else{
    console.log('****** DB connected successfully');
}

app.listen(stage.port, () => {
    console.log(`************* Running on port ${stage.port}`)
});