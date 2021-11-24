/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// prelevo dal dom il div
const div = document.querySelector("div");

// dichiaro le variabili con i numeri randomici 
let numRandomGiocatore = Math.floor(Math.random() * 6) + 1;
let numRandomPc = Math.floor(Math.random() * 6) + 1;
console.log (numRandomGiocatore, numRandomPc);
div.innerHTML = (' Numero random giocatore: ' + numRandomGiocatore + ' Numero random pc: ' + numRandomPc);

// creo l'if per stabilire il vincitore
if (numRandomGiocatore>numRandomPc) {
  console.log ("il giocatore ha ottenuto un numero più alto quindi ha vinto");
  document.writeln("il giocatore ha ottenuto un numero più alto quindi ha vinto");
} else if (numRandomPc>numRandomGiocatore) {
  console.log ("il pc ha ottenuto un punteggio più alto quindi ha vinto");
  document.writeln("il pc ha ottenuto un numero più alto quindi ha vinto");
} else if (numRandomGiocatore==numRandomPc) {
  console.log ("il pc e il giocatore hanno ottenuto lo stesso numero quindi pareggio");
  document.writeln("il pc e il giocatore hanno ottenuto lo stesso numero quindi pareggio");
}
