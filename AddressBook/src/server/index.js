const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routerContact = require('./routes/contact');

// Connexion à MongoDB (Pool de connexion)
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

// Middleware qui logue dans la console
app.use(morgan('dev'));

// Middleware qui héberge les fichiers statiques
app.use('/node_modules', express.static(path.resolve(__dirname + '/../../node_modules')));
app.use(express.static(path.resolve(__dirname + '/../client')));

// Enregistrement des routes associés aux contacts (prefixées par /api/contacts)
app.use('/api/contacts', routerContact);

// Middleware 404
app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        msg: req.errorMsg || 'Erreur 404'
    });
});

// Middleware 500
app.use('/api', (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        msg: err
    });
});

// Pour que l'appli angular reçoivent l'index quoiqu'il arrive
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

// Démarrage du serveur
app.listen(8080, () => {
    console.log('Server started');
});