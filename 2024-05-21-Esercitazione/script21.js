/*

1- Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()

```js

function clear(){
    ...
}

clear() // fa stessa cosa di console.clear()

```

2- Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

```js

function capitalize(string){
    return // ...;
}

// output 
capitalize('ciao');     // Ciao
capitalize('mondo');    // Mondo
capitalize('Mondo');    // Mondo
capitalize('TEST');     // Test

```

3- Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

```js

function min(a, b){

    return //...
}

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;

```

4- Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

```js

function potenza(base, esponente){

    for(let i=0; i < espontente, i++){
        // ...
    }

}

// output:
potenza(4,2)    // 16
potenza(5,3)    // 125
potenza(1, 100) // 1

// bonus point prevediamo anche l'elevamento a potenza con esponente 0.


```

- Bonus point (opzionale):
il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.

```js

function factorial(n){

}

factorial(5) // 120
factorial(4) // 24

```

*/

//1
function clear () {
    return console.clear ();
}

clear();

//1.5
function log (print) {
    return console.log (print);
};

//2
function capitalize (Words) {
    const fisrtLetterToUpperCase = Words [0].toUpperCase();
    const stringWithoutFirst = Words.slice(1).toLowerCase();
    const stringCapitalize = `${fisrtLetterToUpperCase}${stringWithoutFirst}`;

    return stringCapitalize;
};

log (capitalize("hello WORLD!"));

//3
function min (a, b) {
    if ((Number.isNaN(Number(a))) || (Number.isNaN(Number(b)))){
        console.error ("Cambia!")
        return "Non sono numeri"
    }
    const minimum = (a <= b) ? a : b;

    return minimum;
};

log (min(2,"8"));
log (min(12,8));
log (min(22,18));

//4
//clear();

/* function power (base, esponente){
    return Math.pow (base, esponente);
}; */

function power (base, exponent){
    let powerResult = base

    if (exponent < 0) {
        for (let i = 1; i < (exponent * -1); i++) {
        powerResult = 1 / (base * base);
        };
    } else {
        for (let i = 1; i < exponent; i++) {
            powerResult *= base;
        };
        
        if (exponent == 0) {
            powerResult = 1;
        }
    };    

    return powerResult;
};

log(power(2,-2));
log(power(5,3));
log(power(2,10));

//FATTORIALE BONUS
function factorial (n) {
/*     let factorialResult = 1;

    for (i = 2; i <= n; i++) {
        factorialResult = factorialResult * i;
    }
    return factorialResult; */

    if (n === 0){
        return 1;
    }

    return n * factorial (n-1);
};

log (factorial(4));