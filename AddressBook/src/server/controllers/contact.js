const Contact = require('../models/contact');

// GET /api/contacts HTTP/1.1
// Host: localhost:8080
exports.list = (req, res, next) => {
    Contact.find('prenom nom')
        .then(contacts => res.json(contacts))
        .catch(next);
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
    contact.save()
        .then(contact => {
            res.statusCode = 201;
            res.json(contact);
        })
        .catch(next);
};

// GET /api/contacts/123 HTTP/1.1
// Host: localhost:8080
exports.show = (req, res, next) => {
    Contact.findById(req.params.id)
        .then(contact => {
            if (!contact) {
                req.errorMsg = 'Contact not found';
                return next();
            }
            res.json(contact);
        })
        .catch(next);
};

// DELETE /api/contacts/123 HTTP/1.1
// Host: localhost:8080
exports.remove = (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(contact => {
            if (!contact) {
                return next();
            }
            res.json(contact);
        })
        .catch(next);
};