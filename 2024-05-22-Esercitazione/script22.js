/*
#### Direzioni
Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

```js

function indicazioni(...directions){

}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'
```


#### Contare le direzioni

scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.


function contaIndicazioni(...directions){
    const directions = { su: 0, giu: 0, ... };

    // fare un ciclo per ogni direction...

    return directions;
}


#### Conta il click

scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

```js
let count = 0;
const countClick = () => {
    
} 

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3

```*/


/*
#### Bonus: Ripasso Array

Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: 
a = 1;
b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

tips: 

```js
const indexForEachLetter = {
    a: 1,
}
const input = 'Rosso di sera, bel tempo si spera';


function alphabetPosition(string){
    let output = '';

    for(let letter of string){
        const value = indexForEachLetter[...];

    }

    return output;    
}
```*/

//1
/* Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log
nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra" */

function printDirection (...direction) {
    
//direction = [su, su, giù]

    /* 
    const directionArray = [su, giù, sinistra, destra]

    for (let i = 0; i < directionArray.length; i++){
       // const argument = direction[i];
        if (directionArray.includes((direction[i]))){
           return 'OK';
        };
    }; */

    for (let direct of direction){
        if (direct === `su` || direct === `giù` || direct === `sinistra` || direct === `destra`){
            console.log (direct);
        }
    };
};

printDirection(`su`, `sinistra`, `su`, `ciao`);

//2
/* Contare le direzioni
scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali. */
function directionCount (...direction){
    const directionObject = {
        su: 0,
        giù: 0,
        destra: 0,
        sinistra: 0,
    }

    for (let i of direction){
        if (directionObject.hasOwnProperty(i)){
            directionObject[i]+=1;
        }
    }
    return directionObject;
};

console.log(directionCount(`su`, `su`, `giù`));

//3
/* Conta il click
scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick. */

let count = 0;
const countClick = () => {
    return console.log(`Click-> ${count++}`);
} 

document.body.onclick = countClick;