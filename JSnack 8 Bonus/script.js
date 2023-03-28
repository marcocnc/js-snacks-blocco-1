/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */
 

const numeroUtente = prompt('Inserisci un numero di 4 cifre');
let somma = 0;

for (let i = 0; i < numeroUtente.length; i++) {
    somma += parseInt(numeroUtente[i]); /* in questo modo si vanno a prendere i numeri inseriti dall'utente a ogni indice ciclato e si sommano con += */
}
console.log(somma);







// for (let i = 0; i < numeroUtente.length; i++) {
//     // console.log(numeroUtente[i]);
//     // console.log(numeroUtente.charAt(i));
//     somma += parseInt(numeroUtente[i]);
// }
// console.log(somma);