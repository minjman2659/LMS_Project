const express = require('express');

const v1 = express.Router();

const auth = require('./auth');
const me = require('./me');

v1.use('/auth', auth);
v1.use('/me', me);

module.exports = v1;
