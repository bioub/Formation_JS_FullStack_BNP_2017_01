const express = require('express');
const routerContact = require('./routes/contact');

const mongoose = require('mongoose');
const morgan = require('morgan');
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use(morgan('dev'));
// Les routes associés aux contacts
// Prefix : /api/contacts
app.use('/api/contacts', routerContact);

// Les routes associés aux contacts
// Prefix : /api/societes

app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        msg: 'Erreur 404'
    });
});

app.listen(8080, () => {
    console.log('Server started');
});