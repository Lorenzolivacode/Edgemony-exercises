// Esercizi:

/*

Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array

```js
const risposte = []; // salviamo tutte le risposte
let score = 0;
let risposta;

risposta = ...;
// aggiungere al nostro array di risposte;


....

console.log() // mostriamo tutte le risposte
```

----

Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" 
in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

--- 

Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi... 

```js 

constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()

```

*/

/* QUIZ */
let score = 0;

let question1 = prompt(`Quante regioni ci sono in italia?: 18; 20; 30; 25`)
let question2 = prompt(`Qual'è la capitale della Spagna?: Roma, Madrid; Mumbai; Tokyo`)
let question3 = prompt(`Qual'è la molecola dell'acqua?: O2; H2O; Fe; H`)
let question4 = prompt(`Come si chiamava di nome Dalì?: Piero; Pippo; Salvador; Totò`)

const answers = [];

answers.push(question1);
answers.push(question2);
answers.push(question3);
answers.push(question4);

alert(`Hai risposto a ${answers.length} domande, sono: - ${answers.join(` - `)}`)

question1 = question1.toLowerCase().trim();
question2 = question2.toLowerCase().trim();
question3 = question3.toLowerCase().trim();
question4 = question4.toLowerCase().trim();

switch (question1) {
    case `20`:
        score += 3;
    break;
    case `18`:
    case `30`:
    case `25`:
        score -= 1;
    break;
    default:
        alert(`Inserisci una risposta valida`)
        score -= 1;
}

switch (question2) {
    case `madrid`:
        score += 3;
    break;
    case `roma`:
    case `mumbai`:
    case `tokyo`:
        score -= 1;
    break;
    default:
        alert(`Inserisci una risposta valida`)
        score -= 1;
}

switch (question3) {
    case `h2o`:
        score += 3;
    break;
    case `o2`:
    case `fe`:
    case `h`:
        score -= 1;
    break;
    default:
        alert(`Inserisci una risposta valida`)
        score -= 1;
}

switch (question4) {
    case `salvador`:
        score += 3;
    break;
    case `piero`:
    case `pippo`:
    case `totò`:
        score -= 1;
    break;
    default:
        alert(`Inserisci una risposta valida`)
        score -= 1;
}

alert(`Il tuo punteggio è: ${score}`);

if (score == 12){
    alert(`SEI IL NUOVO CAMPIONE!`)
};

/* 3 PAROLE */

//Prima parola
const vowels = "aeiou"

let userWord = prompt(`Inserisci una parola`);
let firstLetterOfUWord = userWord[0].toLocaleLowerCase();

alert(`la tua parola "${userWord}" ${(vowels.includes(firstLetterOfUWord)) ? `inizia per vocale`:`inizia per consonante`}`);

//Seconda parola
userWord = prompt(`Inserisci una parola`);
firstLetterOfUWord = userWord[0].toLocaleLowerCase();

alert(`la tua parola "${userWord}" ${(vowels.includes(firstLetterOfUWord)) ? `inizia per vocale`:`inizia per consonante`}`);

//Terza parola
userWord = prompt(`Inserisci una parola`);
firstLetterOfUWord = userWord[0].toLocaleLowerCase();

alert(`la tua parola "${userWord}" ${(vowels.includes(firstLetterOfUWord)) ? `inizia per vocale`:`inizia per consonante`}`);



/* PAROLA ROVESCIATA */
const string = prompt(`Inserisci una parola`);

if ((typeof string !== 'string') || (string <1)){
    alert(`Inserisci un testo, ora ti tocca rispondere ancora a tutte le domande!`)
    window.location.reload();
} 

/* const myArrayString = string.split('');
const myArrayReverse = myArrayString.reverse(); */

alert(string.split('').reverse().join(''));