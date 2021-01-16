const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const mensTorahRouter = require('../routes/tmn-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/tmn', mensTorahRouter);                     
server.use('/api/tmn/region', mensTorahRouter);                     

server.get('/', (req, res) => {
    res.send(`<h1>Server is up!</h1> `);
    console.log('server is up')
});

module.exports = server;
