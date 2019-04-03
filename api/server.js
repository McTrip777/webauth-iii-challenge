const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const auth = require('../router/auth.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/', auth);

server.get('/', (req,res) => {
    res.send('This is my Server!!!');
})

module.exports = server;