const express = require('express');

const v1 = express.Router();

const auth = require('./auth');

v1.use('/auth', auth);
// v1.use('/posts', posts);

module.exports = v1;
