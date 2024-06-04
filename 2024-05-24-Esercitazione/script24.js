/*

#### Creazioni elementi:

Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.


#### Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
- Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
- Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;


#### Lista di nomi:

Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

```html

<form>
    <div>
        <label for="nomi">Lista nomi e cognomi</label>
        <input 
            id="nomi" 
            name="nomi" 
            type="text" 
            minlength="3" 
            autocomplete="off" 
        />
    </div>

    <button type="submit">Invia</button> 
</form>

<ul class="list"></ul>

```

Usiamo JS per inserire all'evento `onsubmit` una function che:
- previene il comportamento di default del form.
- Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
- Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
- Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log() quando viene eseguito il click.

```js

const formEl = // ...;
const inputEl = // ...;

formEl.onsubmit = function(event){

    event. /// eseguiamo un particolare metodo...

    const inputValue = // ...

    if(...){
        
    }
}

```


*/

//1
const containerHTML = document.body.querySelector('.container');

const h1El = document.createElement ('h1');
h1El.innerHTML = 'Sono un Super h1';
console.log (h1El)
containerHTML.insertAdjacentElement('afterbegin', h1El);

const pEl = document.createElement ('p');
pEl.innerHTML = 'Sono un Paragrafo breve ma figo';
console.log (pEl)
containerHTML.append(pEl);
containerHTML.querySelector('p').style.color = "red";

//2
const btn0 = document.createElement ('button');
btn0.innerHTML = '0';
console.log (btn0)
containerHTML.append(btn0);
containerHTML.querySelector('button').style.minWidth = "40px";
containerHTML.querySelector('button').style.borderRadius = "40px";
containerHTML.querySelector('button').style.backgroundColor = "rgb(100,180,240)";
containerHTML.querySelector('button').style.margin = "40px";
containerHTML.querySelector('button').style.padding = "10px";

btn0.onmouseenter = function() {
    //this.style.rotate = "90deg";
    this.style.backgroundColor = "rgb(220,180,100)";
    this.style.width = "200px";
    this.innerText = "SU! Clicca!";
}

btn0.onmouseleave = function() {
    this.style.backgroundColor = "rgb(100,180,240)";
    this.style.width = "40px";
    //this.innerText = "0";
}

btn0.onclick = function (){
    let btn0ToNumber = Number(this.innerHTML);
    if (isNaN(btn0ToNumber)){
        btn0.innerHTML = 0;
    } else {
        btn0.innerHTML++;
    };
    this.style.scale = "1.5";
};

//3
const formEl = document.body.querySelector('form');
const inputEl = document.body.querySelector('input');
const ulList = document.body.querySelector('.list');

formEl.onsubmit = function (event){
    event.preventDefault();
    
    const listEl = document.createElement('li');
    const inputValue = inputEl.value.trim();

    if (inputValue && inputValue.includes(' ')){
        listEl.innerText = inputValue;
        ulList.append(listEl);
    }

    inputEl.value = ''; //Dopo averlo aggiunto alla lista, fa tornare l'input vuoto
};

ulList.onclick = function(event){
    if (event.target && event.target.nodeName === 'LI'){

        console.log(event.target.innerText);
    }
};
