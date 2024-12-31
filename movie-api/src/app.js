require('dotenv').config();
const express = require('express');
const path = require('path');

const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler');
const movieRoutes = require('./routes/movieRoutes');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/movies', movieRoutes);


app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


app.use(errorHandler);

module.exports = app;
