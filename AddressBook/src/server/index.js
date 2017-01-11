const express = require('express');
const routerContact = require('./routes/contact');

const app = express();

// Les routes associés aux contacts
// Prefix : /api/contacts
app.use(routerContact);

// Les routes associés aux contacts
// Prefix : /api/societes

app.listen(8080, () => {
    console.log('Server started');
});