const Contact = require('../models/contact');

exports.list = (req, res, next) => {
    Contact.find('prenom nom', (err, contacts) => {
        res.json(contacts);
    });
};

// POST /api/contacts HTTP/1.1
// Host: localhost:8080
// Content-type: application/json
// {
//    "prenom": "Mark",
//    "nom": "Zuckerberg"   
// }

exports.create = (req, res, next) => {
    const contact = new Contact(req.body);
    contact.save(function (err, contact) {
        res.statusCode = 201;
        res.json(contact);
    });
};

exports.show = (req, res, next) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (!contact) {
            return next();
        }
        res.json(contact);
    });
};

exports.remove = (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, (err, contact) => {
        if (!contact) {
            return next();
        }
        res.json(contact);
    });
};