/*

    Nome e Cognome
        - Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
        - Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;

        - Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
        - Se abbiamo mostrato un errore ricarichiamo la pagina usando `window.location.reload()`;

        - Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip:
        ```js
        const firstName = '...';
        const firstLetter; // ...
        const nameWithoutFirstLetter; // ...
        const firstNaneWithCapitalize; // ...
        ```
        - Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;

        - Mostriamo tramite alert "Ciao + [Nome] + [Cognome]";

    Quizzone - Qui usiamo lo switch dove possibile
        - Creiamo una variabile `let score = 0;`;
        - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
        - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
        - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
        - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"

*/


// Nome e Cognome
let userName = prompt(`Inserisci nome`);
let userSurname = prompt(`Inserisci cognome`);

if ((userName.length < 1) || (userSurname.length < 1)){
    alert ('inserisci il tuo nome e cognome');
    window.location.reload();
} else if ((userName.length < 3) || (userSurname.length < 3)){
    alert ('Il nome ed il cognome devono avere almeno 3 caratteri');
    window.location.reload();
} else {
    const firstLetterName = userName[0].toUpperCase();
    const nameWithoutFirstLetter = userName.slice (1);
    const firstNameWithCapitalize = `${firstLetterName}${nameWithoutFirstLetter}`;
    const firstLetterSurname = userSurname[0].toUpperCase();
    const surnameWithoutFirstLetter = userSurname.slice (1);
    const firstSurWithCapitalize = `${firstLetterSurname}${surnameWithoutFirstLetter}`;
    alert (`Ciao ${firstNameWithCapitalize} ${firstSurWithCapitalize}`)
}

// Quizzone
let score = 0;

let question1 = prompt(`Quante regioni ci sono in italia?`)
let question2 = prompt(`Qual'è la capitale della Spagna?`)
let question3 = prompt(`Qual'è la molecola dell'acqua?`)
let question4 = prompt(`Come si chiamava di nome Dalì?`)

question1 = question1.toLowerCase().trim();
question2 = question2.toLowerCase().trim();
question3 = question3.toLowerCase().trim();
question4 = question4.toLowerCase().trim();

switch (question1) {
    case `20`:
        score += 3;
    break;
    default:
        score -= 1;
}

switch (question2) {
    case `madrid`:
        score += 3;
    break;
    default:
        score -= 1;
}

switch (question3) {
    case `h2o`:
        score += 3;
    break;
    default:
        score -= 1;
}

switch (question4) {
    case `salvador`:
        score += 3;
    break;
    default:
        score -= 1;
}

alert(`Il tuo punteggio è: ${score}`);

if (score == 12){
    alert(`SEI IL NUOVO CAMPIONE`)
}