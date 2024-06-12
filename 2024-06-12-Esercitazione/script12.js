/* 
Esercizio 1: Creiamo il nostro metodo POST e aggiungiamo dei dati alla API, rispettando ciò che la documentazione ci dice, 
    salviamoci l'ID* che l'api ci fornirà ai dati che avremo mandato

Esercizio 2: Vogliamo provare ad interagire con il DOM? Creiamo un form come abbiamo fatto durante la lezione con i vari 
    campi input necessari per compilare il nostro oggetto da mandare con la POST alla API

Esercizio 3: Creiamo una funzione DELETE che passato un ID cancella un oggetto esistente nella API

Esercizio 4(Opzionale): Creiamo un campo input + button specifico per la DELETE, inseriamo l'id all'interno del campo input 
    e al click del button cancellerà l'id che abbiamo specificato e ci darà un feedback visivo sul dom del tipo "oggetto rimosso" 
    e con un setTimeout dopo qualche secondo togliamo la scritta "oggetto rimosso"

Esercizio 5(Opzionale): Stampiamo a DOM il risultato della GET a questa nuova API 

*salvatelo banalmente facendo un console log
*/

/* OBJECT API
{
    "title": "string",
    "price": 0,
    "description": "string",
    "categoryId": 0,
    "images": "string"
}
 */

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images-url');
const buttonSendEl = document.querySelector('.send');
const buttonAutoCompileEl = document.querySelector('.auto-compile');

const inputIdDelete = document.querySelector('.id-delete');
const buttonDeleteEl = document.querySelector('.delete-btn');

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

const productObjEl = {
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: ''
    };

window.onload = () =>{
    inputTitleEl.value = '';
    inputPriceEl.value = '';
    inputDescriptionEl.value = '';
    inputCategoryEl.value = '';
    inputImagesEl.value = '';
    inputIdDelete.value = '';
}

const POST = async (product) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    const data = await res.json();

    // console.log(data.images.map(img => img.split('"')[1]))
    console.log(data)

    product.idGet = data.id;
    product.creationData = data.creationAt.slice(0,10);
    product.creationTime = data.creationAt.slice(11,19);

};

const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    console.log(data)
}

buttonAutoCompileEl.addEventListener('click', (e) =>{
    e.preventDefault();

    if (inputTitleEl.value === ''){
        inputTitleEl.value = 'Pippo';
    }

    if (inputPriceEl.value === ''){
        inputPriceEl.value = 10;
    }

    if (inputDescriptionEl.value === ''){
        inputDescriptionEl.value = 'Questo oggetto è un SuperPippo';
    }

    inputCategoryEl.value++;

    if (inputImagesEl.value === ''){
        inputImagesEl.value = 'https://picsum.photos/200';
    }

    console.log(typeof inputPriceEl.value)
})

buttonSendEl.addEventListener('click', (e) => {
    e.preventDefault();
    
    const productObjEl = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    };

    /* productObjEl.title = inputTitleEl.value;
    productObjEl.price = inputPriceEl.value;
    productObjEl.description = inputDescriptionEl.value;
    productObjEl.categoryId = inputCategoryEl.value;
    productObjEl.images = [inputImagesEl.value]; */

    POST(productObjEl)

    //inputIdDelete.value = Number(productObjEl.id);

    console.log (productObjEl)
    console.log (productObjEl.idGet) // Torne Undefined ??Perchè??
    
    setTimeout(() => {
        console.log (productObjEl.idGet)
        inputIdDelete.value = Number(productObjEl.idGet);
    },500)
});

//console.log (productObjEl)

buttonDeleteEl.addEventListener('click', () => {
    //e.preventDefault();

    console.log(inputIdDelete.value);
    
    deleteById(inputIdDelete.value);
    
    //console.log(inputIdDelete.value);
})