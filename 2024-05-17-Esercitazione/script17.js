/*

Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)

----

Palindromi:
abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente.
Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array
ed usare un for per poter controllare se è palindroma.

nel caso in cui non troviamo corrispondenza usiamo dal for e stampiamo in console.log un messaggio.
se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"


tips:
ogni carattere è uguale al suo elemento specchio nella parola
elemento ad indice 0 === elemento ad indice fine meno -1
elemento ad indice 1 === elemento ad indice fine meno -2
elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1 

```js
for(){

    if( elemento corrisponde a...){}

    isLast = index === length -1;

    if(elemento è l'ultimo dell'array...){

    }
}
```

----


*/

//N° POSITIVO

const NUMBERS = [-1, -2, -10, 2, 5];

//N° > 0
console.log (`Stampo i numeri positivi:`);

for (let i = 0; i < NUMBERS.length; i++) {

    //let print = (NUMBERS[i] > 0) ? console.log (NUMBERS[i]):"";

    /* if (NUMBERS[i] > 0) {
        console.log (NUMBERS[i]);
    } */
    
    if (NUMBERS[i] < 0) {
        continue;
    }
    console.log (NUMBERS[i]);
};

//BREAK
console.log (`Stampo finchè non trovo i numeri positivi:`);

for (let indexBreak = 0; indexBreak < NUMBERS.length; indexBreak++) {
    
    if (NUMBERS[indexBreak] > 0) {
        break;
    };
    console.log (NUMBERS[indexBreak]);
}

//PALINDROMI
const WORD = prompt(`Prova a trovare un palindromo`);

if ((typeof WORD !== 'string') || (WORD.length < 3) || (!isNaN(Number(WORD)))){
    alert(`Inserisci un testo!`);
    window.location.reload();
}

const ARRAY_WORD = WORD.toLowerCase().replaceAll (' ','').split('');

//console.log (ARRAY_WORD);

for (let indexWord = 0; indexWord < (WORD.length)/2; indexWord++) {

    //let confronto = ARRAY_WORD[indexWord] === ARRAY_WORD[((ARRAY_WORD.length - 1)-indexWord)];
    //console.log (`${ARRAY_WORD[indexWord]} ${ARRAY_WORD[((ARRAY_WORD.length - 1)-indexWord)]}`);

    if (!(ARRAY_WORD[indexWord] === ARRAY_WORD[((ARRAY_WORD.length - 1)-indexWord)])) {
        alert(`Quello che hai scritto non è un palindromo, RIPROVA!`)
        window.location.reload();
    };
};

alert(`COMPLIMENTI! "${WORD}" è un palindromo!`)