const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./routes/apiRoutes');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json()); 

app.use('/api/v1/Api', apiRouter);

module.exports = app;





