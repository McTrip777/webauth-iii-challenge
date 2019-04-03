const server = require('./api/server');

server.listen(5000, (req,res) => {
    console.log('server listening on port 5000');
});