const express = require('express');

const server = express();

server.use((req, res, next) => {
    console.log(req.method + ' ' + req.url);
    next();
});

server.get('/', (req, res, next) => {
    res.send('Home');
});

server.get('/hello', (req, res, next) => {
    res.send('Hello');
});

server.get('/api/contacts', (req, res, next) => {
    res.json([{
        prenom: 'Romain'
    }]);
});

server.use((req, res, next) => {
    res.statusCode = 404;
    res.send('Erreur 404');
});

server.listen(8080, () => {
    console.log('Server started');
});