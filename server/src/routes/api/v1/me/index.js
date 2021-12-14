const express = require('express');

const me = express.Router();

const courses = require('./courses');

me.use('/courses', courses)

module.exports = me;