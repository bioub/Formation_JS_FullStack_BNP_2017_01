const contacts = [{
    prenom: 'Romain',
    nom: 'Bohdanowicz',
    id: 12
}, {
    prenom: 'Jean',
    nom: 'Dupont',
    id: 245
}]

/**
 * Le controleur contact list
 */
exports.list = (req, res, next) => {
    res.json(contacts);
};

exports.show = (req, res, next) => {
    const id = Number(req.params.id);

    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return next();
    }

    res.json(contact);
};