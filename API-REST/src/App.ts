const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {routes} = require('./routes/index');

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

routes(app);

module.exports = {app}


