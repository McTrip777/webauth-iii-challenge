const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const auth = require('../auth/auth.js');
const user = require('../users/user-router.js');
const restrict = require('../auth/restrict.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', auth);
server.use('/api/user', restrict, user);

server.get('/', (req,res) => {
    res.send('This is my Server!!!');
})

module.exports = server;