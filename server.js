const express = require('express');

const recipeRouter = require('./recipe/recipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;