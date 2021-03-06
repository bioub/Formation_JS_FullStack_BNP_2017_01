// Ex : Jeu du plus ou moins
// 1- Générer un entier aléatoire entre 0 et 100 inclus (API Math sur MDN)
// 2- Demander et récupérer la saisie d'un entier (API readline de Node)
// et afficher si l'entier recherché est plus grand, plus petit ou trouvé
// 3- Pouvoir trouver en plusieurs tentatives
// 4- Stocker chaque tentative dans un tableau et les réafficher entre chaque tour
// (API Array sur MDN)
// 5- Afficher une erreur et rejouer si la saisie n'est pas un nombre
const readline = require('readline');

const tentatives = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Jeu {
    constructor(options = {}) {
        options.min = options.min || 0;
        options.max = options.max || 100;
        this._nbAlea = getRandomIntInclusive(options.min, options.max);
        this._essais = [];
    }
    jouer() {
        if (this._essais.length) {
            console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
        }

        rl.question('Quel est le nombre ? ', saisie => {
            var entierSaisi = Number.parseInt(saisie);

            if (Number.isNaN(entierSaisi)) {
                console.log('Il faut saisir un nombre');
                return this.jouer();
            }

            this._essais.push(entierSaisi);

            if (entierSaisi < this._nbAlea) {
                console.log(`${entierSaisi} est trop petit`);
                return this.jouer();
            }

            if (entierSaisi > this._nbAlea) {
                console.log(`${entierSaisi} est trop grand`);
                return this.jouer();
            }

            console.log(`C'est gagné !`);
            rl.close();
        });
    }
}



// Utilisation
var jeu = new Jeu({
    max: 50
});

jeu.jouer();