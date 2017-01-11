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

const router = new Router();
router.get('/api/contacts', contact.list);
router.get('/api/contacts/:id', contact.show);

module.exports = router;