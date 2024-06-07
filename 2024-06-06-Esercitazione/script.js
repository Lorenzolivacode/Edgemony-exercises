/* 
    Esercitazione del giorno:

    Esercizio 1: esercitiamoci con fetch , effettuiamo una chiamata a https://fakestoreapi.com/products, 
                    sfruttando i .then() stampiamo a console i dati ottenuti comprensibili per js
    Esercizio 2: proviamo a stampare i dati ottenuti sul DOM, va bene anche una card o un titolo, comunque che sia qualcosa ottenuta 
                    dalla risposta della nostra chiamata
    Esercizio 3 (opzionale): stampiamo tutti i prodotti con delle card, sbizzarritevi con lo stile
    Esercizio 4 (opzionale - avanzato): che ne dite di fare un button al centro della pagina che al click vi carica i prodotti a DOM?

    Esercizio 5 (opzionale - pazzo): -solo per pazzi- e se inserissimo un campo input che all'inserimento del testo 
                filtra i prodotti stampati sul DOM?*
*/

//UTILITIES
function QS (tag){
    const QS = document.querySelector(tag);
    return QS;
}

function CE (ele){
    const CE = document.createElement(ele);
    return CE;
};

//1 - 2 (con un po' di 4 e 5 pazzo)
fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) =>{
    console.log(data);

    const inputTxt = QS('.input-txt');
    const inputBtn = QS('.input__btn')
    let inputValue = "";

    console.log(inputTxt);

    inputTxt.addEventListener('change', (e) => {
        inputValue = e.target.value;
        //console.log(inputValue);
        return inputValue;
    });

    inputBtn.addEventListener("click", () => {
        if (inputValue ==='' || 
            Number(inputValue) > 20 || 
            Number(inputValue) < 0 ||
            isNaN(Number(inputValue))
            ){
            alert('Devi inserire un numero da 1 a 20');
        } else {
            console.log(inputValue);

            const cardTitle = QS('.card__title');
            const cardImg = QS('.card__img');
            const cardId = QS('.card__id');
            const cardPrice = QS('.card__price');

            const titleEl = data[inputValue-1].title;
            const imgEl = data[inputValue-1].image;
            const idEl = `# ${data[inputValue-1].id}`;

            /* 
            const idEl = data[inputValue-1].id;
            
            const idElLength = idEl.toString.length
            const car = (2-idElLength).toString();
            const idElComplete = car.padStart(1, "0")

            console.log(idElComplete)
            console.log(car)
            */

            const priceEl = `€ ${data[inputValue-1].price}`;
            //console.log(priceEl);

            cardTitle.textContent = titleEl;
            cardImg.src = imgEl;
            cardId.textContent = idEl;
            cardPrice.textContent = priceEl;
        }
    })

    });

/* const getStringId = (num) => {
   if(isNaN(num)){
     return 'Errore: non hai inserito un numero. Boh mah, ta firi a cuntari?'
   }

   return parseInt(num) < 10 ? `0${num}` : num.toString();
}

console.log(getStringId(1));
console.log(getStringId(13));
console.log(getStringId(4)); */