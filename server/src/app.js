const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { consumeToken, errorHandler, missingPath } = require('middleware');
const imagesDir = require('lib/images-dir');
const moviesDir = require('lib/movies-dir');

const routes = require('./routes');

// express를 이용한 서버 구현
const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(cookieParser());

app.use('/images', express.static(imagesDir));
app.use('/movies', moviesDir);

app.use(consumeToken);

app.use('/', routes);
app.use(missingPath);
app.use(errorHandler);

module.exports = app;
