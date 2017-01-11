// Ex : Jeu du plus ou moins
// 1- Générer un entier aléatoire entre 0 et 100 inclus (API Math sur MDN)
// 2- Demander et récupérer la saisie d'un entier (API readline de Node)
// et afficher si l'entier recherché est plus grand, plus petit ou trouvé
// 3- Pouvoir trouver en plusieurs tentatives
// 4- Stocker chaque tentative dans un tableau et les réafficher entre chaque tour
// (API Array sur MDN)
// 5- Afficher une erreur et rejouer si la saisie n'est pas un nombre
const readline = require('readline');
const random = require('./random');

const tentatives = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Jeu = function(options) {
    options = options || {};
    options.min = options.min || 0;
    options.max = options.max || 100;
    this._nbAlea = random.getIntInclusive(options.min, options.max);
    this._essais = [];
};

Jeu.prototype.jouer = function() {
    var that = this;
    
    if (this._essais.length) {
        console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
    }

    rl.question('Quel est le nombre ? ', function answerCb(saisie) {
        var entierSaisi = Number.parseInt(saisie);

        if (Number.isNaN(entierSaisi)) {
            console.log('Il faut saisir un nombre');
            return that.jouer();
        }

        that._essais.push(entierSaisi);

        if (entierSaisi < that._nbAlea) {
            console.log('Trop petit');
            return that.jouer();
        }

        if (entierSaisi > that._nbAlea) {
            console.log('Trop grand');
            return that.jouer();
        }

        console.log(`C'est gagné !`);
        rl.close();
    });
};

module.exports = Jeu;