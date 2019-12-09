require('dotenv').config();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

const logger = require('morgan');
const express = require('express');
const app = express();
const router = express.Router();
const body = require('body-parser');
const routes = require('./routes');

if(environment == 'DEV'){
    app.use(logger('dev'));
}

app.use(body.urlencoded({
    extended: true
}));
app.use(body.json());
app.use('/api', routes(router));

app.listen(stage.port, () => {
    console.log(`************* Running on port ${stage.port}`)
});