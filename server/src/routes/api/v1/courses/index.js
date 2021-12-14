const express = require('express');

const courses = express.Router();

const { needsAuth } = require('middleware');

const { list, create } = require('./courses.ctrl');

courses.get('/:userId', needsAuth, list);
courses.post('/', needsAuth, create);

module.exports = courses;
