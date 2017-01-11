'use strict';

export class Horloge {
  constructor(conteneur) {
    this.conteneur = conteneur;
  }

  update() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0'); 
    let minutes = String(now.getMinutes()).padStart(2, '0'); 
    let seconds = String(now.getSeconds()).padStart(2, '0'); 
    this.conteneur.innerHTML = `${hours}h${minutes}m${seconds}`;
  }

  start() {
    setInterval(this.update.bind(this), 1000);
  }
}
