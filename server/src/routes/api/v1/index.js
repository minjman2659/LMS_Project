const express = require('express');

const v1 = express.Router();

const auth = require('./auth');
const courses = require('./courses');

v1.use('/auth', auth);
v1.use('/courses', courses);

module.exports = v1;
