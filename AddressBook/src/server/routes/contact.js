const Router = require('express').Router;
const bodyParser = require('body-parser');

const contact = require('../controllers/contact');

// Convention RESTful
// Lister => GET /prefix (ex: GET /api/contacts)
// Ajouter => POST /prefix
// Afficher => GET /prefix/:id
// Remplacer => PUT /prefix/:id
// Supprimer => DELETE /prefix/:id

const router = new Router();
router.get('/', contact.list);
router.post('/', bodyParser.json(), contact.create);
router.get('/:id', contact.show);
router.delete('/:id', contact.remove);

module.exports = router;