const Router = require('express').Router;
const contact = require('../controllers/contact');

// Convention RESTful
// Lister
// GET /prefix (ex: GET /api/contacts)
// Ajouter
// POST /prefix
// Afficher
// GET /prefix/:id
// Remplacer
// PUT /prefix/:id
// Supprimer
// DELETE /prefix/:id
const bodyParser = require('body-parser');

const router = new Router();
router.get('/', contact.list);
router.post('/', bodyParser.json(), contact.create);
router.get('/:id', contact.show);
router.delete('/:id', contact.remove);

// Exercice :
// Modifier la méthode show en utilisant
// Contact.findById() de Mongoose
// Ajouter la route 
// DELETE /prefix/:id
// Contact.findByIdAndRemove() de Mongoose

module.exports = router;