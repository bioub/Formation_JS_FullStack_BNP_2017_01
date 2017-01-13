const mongoose = require('mongoose');

// Création du schéma pour Mongoose
const Contact = mongoose.model('contacts', { 
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: String,
    telephone: String
});

module.exports = Contact;