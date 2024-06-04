/*

Esercizi:
- definiamo variabile che contiene una stringa
    - Usiamo i doppi apici e salviamo la stringa: Ciao Mondo!
    - Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
        - Occhio ad usare un escape per i singoli apici dentro la stringa!!
    - Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo" 

- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase()) 
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()
    - Facciamo un console.log del dato precedento portato a lowercase

- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
    - tips:
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if([...] > 7 ){

        }

*/

// ESERCIZIO 1
let variabileStringa = "Ciao Mondo!";

let variabileDelloZio = 'Mio zio viene dalla città di l\'Aquila';

let sumVariable = `${variabileStringa} 
${variabileDelloZio}`;

console.log (sumVariable);

// ESERCIZIO 2
let newVariable = variabileStringa.toUpperCase();

console.log (newVariable);

// ESERCIZIO 3
let questionUser = prompt(`Inserisci nome`);

console.log (questionUser.toLowerCase());

// ESERCIZIO 4
let questionNumber = prompt(`Inserisci un numero`)

if (Number(questionNumber) > 7) {
    console.log (`HAI VINTO!`)
} else {
    console.log (`Sarai più fortunato la prossima volta...`)
};