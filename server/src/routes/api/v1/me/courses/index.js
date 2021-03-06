const express = require('express');

const courses = express.Router();

const { needsAuth } = require('middleware');

const { list, add } = require('./my-courses.ctrl');

courses.get('/', needsAuth, list);
courses.post('/', needsAuth, add);

module.exports = courses;
