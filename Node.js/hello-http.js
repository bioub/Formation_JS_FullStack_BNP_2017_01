const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    switch (req.url) {
        case '/':
            res.end('Home');
            break;
        case '/hello':
            res.end('Home');
            break;
        default:
            res.statusCode = 404;
            res.end('404 Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server started');
});