/*

Dato questo object:

```js
const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};
```

vorrei scrivere del codice che possa:

- stampare un console.log per ogni skill presente in coder.skills 
    ```
    // output aspettato:
    'JavaScript'
    'HTML'
    'CSS'
    ```

- salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
  Eseguiamo poi un console.log per controllare tutto sia OK.

- Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
    ```
    // output aspettato:
    "firstName"
    "lastName"
    "age"
    "skills"
    "address"
    ```

- Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
    ```
    // output aspettato:
    age: 29
    address: [object Object]
    ```

- Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

    ```js
    const key = prompt('...');
    const value = prompt('...');

    coder[...] = ...;
    ```

*/

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

//1
console.log (`LE SKILLS SONO:`);

for (let i=0; i < coder.skills.length ; i++) {
    console.log (coder.skills [i]);
};

//2
console.log (`COUNTRY E STREET`);

const askCountry = prompt (`Inserisci your country`);
const askStreet = prompt (`Inserisci your street`);

coder.country = askCountry;
coder.street = askStreet;

console.log (coder);

//3
console.log (`TUTTE LE CATEGORIE`);

for (let key in coder){
    console.log (key);
};

//4
console.log (`ESERCIZIO VOCALI`);

for (let key in coder){
    const vowels = `aeiou`
    const fisrtLetter = key [0];

    if (vowels.includes (fisrtLetter)){
        console.log (key + ': ' + (coder [key]));
    }
};


/* let variabile = coder ['address'];

console.log (typeof variabile);

for (let key in coder){
    const vowels = `aeiou`
    const fisrtLetter = key [0];

    if (vowels.includes (fisrtLetter)){
        if (typeof key == 'object'){
            for (let keySecond in key) {
                console.log (keySecond + ': ' + (key [keySecond]));
            }
            console.log ('TRUE');
        } else {
            console.log (typeof key);
        };
        console.log (key + ': ' + (coder [key]));
    }
}; */

//5
console.log (`ANCORA UN'ALTRA CATEGORIA`);

const askKey = prompt (`Inserisci una nuova categoria`);
const askValue = prompt (`Inserisci il dettaglio della categoria specificata`);

coder [askKey] = askValue;

for (let key in coder){
    console.log (key + ': ' + (coder [key]));
};