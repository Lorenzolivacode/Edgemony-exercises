
import { listToDo } from "./data/todos.js";
import { cardElGen, cardListGen, createShapeIcon } from "./modules/components.js"

const mainSectionEl = document.querySelector('main');
const backDark = document.querySelector('.back-dark');

//NEW

//Aggiungere:
    //IF non ci sono attività ([]) => create h2: "Non ci sono attività da svolgere"

/* if (listToDo.length === 0){
    console.log("Non ci sono attività da svolgere")
} */ // La pagina carica sempre l'array di length 2

const insertContainer = document.querySelector('.insert-container');

const reverseBtn = document.getElementById('btn-reverse');
const filterBtn = document.getElementById('btn-filter');
const casualBtn = document.getElementById('btn-casual');

reverseBtn.onclick = () => {
    const cardList = document.querySelector('.list');
    //console.log(cardList)
    //const cardDirection = cardList.style.flexDirection;

    if (cardList.style.flexDirection === 'column'){
        cardList.style.flexDirection = 'column-reverse';
    } else{
        cardList.style.flexDirection = 'column';
    }

    mainSectionEl.append(cardList);
}

filterBtn.onclick = () => {
    backDark.style.display = 'block';

    const modalFilterActivity = document.createElement('div');

    const containerHigh = document.createElement('div');
    const shapeIconeHigh = createShapeIcon("Img/icons8-favorites-64(1).png");
    const checkHigh = document.createElement('input');
    checkHigh.type = 'checkbox';
    const nameCheckHigh = document.createElement('span');
    nameCheckHigh.textContent = 'Priorità alta';

    const containerMedium = document.createElement('div');
    const shapeIconeMedium = createShapeIcon("Img/icons8-nastro-segnalibro-64(1).png");
    const checkMedium = document.createElement('input');
    checkMedium.type = 'checkbox';
    const nameCheckMedium = document.createElement('span');
    nameCheckMedium.textContent = 'Priorità media';

    const containerLow = document.createElement('div');
    const shapeIconeLow = createShapeIcon("Img/icons8-modificare-64(1).png");
    const checkLow = document.createElement('input');
    checkLow.type = 'checkbox';
    const nameCheckLow = document.createElement('span');
    nameCheckLow.textContent = 'Priorità bassa';

    containerHigh.className = 'container-filter-priority';
    containerMedium.className = 'container-filter-priority';
    containerLow.className = 'container-filter-priority';

    containerHigh.append(shapeIconeHigh, checkHigh, nameCheckHigh);
    containerMedium.append(shapeIconeMedium, checkMedium, nameCheckMedium);
    containerLow.append(shapeIconeLow, checkLow, nameCheckLow);

    const modalFilterBtnX = document.createElement('button');


    modalFilterActivity.id = 'modal-filter-activity';
    modalFilterActivity.className = 'box-modal1';
    modalFilterBtnX.classList.add ('btn-component', 'start-modal__close');

    modalFilterActivity.style.display = 'block';
    console.log(modalFilterActivity)

    modalFilterBtnX.textContent = 'X';

    modalFilterActivity.append(containerHigh, containerMedium, containerLow, modalFilterBtnX);
    insertContainer.append(modalFilterActivity)

    modalFilterBtnX.onclick = () => {
        modalFilterActivity.remove();
        backDark.style.display = 'none';
        }
}

casualBtn.onclick = () => {
    backDark.style.display = 'block';

    const mathCasual = Number.parseInt(Math.random() * listToDo.length);
    console.log(mathCasual);

    const modalCasualActivity = document.createElement('div');

    const containerIconTitleMA = document.createElement('div');
    containerIconTitleMA.style.display = 'flex';
    const shapeIcone = createShapeIcon(listToDo[mathCasual].img);
    //const modalCasualIcon = document.createElement('img');
    const modalCasualTitle = document.createElement('h2');
    const modalCasualComment = document.createElement('p');
    const modalCasualBtnX = document.createElement('button');

    //shapeIcone.className = 'shape-icon';
    modalCasualActivity.id = 'modal-casual-activity';
    modalCasualActivity.className = 'box-modal1';
    modalCasualBtnX.classList.add ('btn-component', 'start-modal__close');

    modalCasualActivity.style.display = 'block';
    console.log(modalCasualActivity)

    //modalCasualIcon.src = listToDo[mathCasual].img;
    modalCasualTitle.textContent = listToDo[mathCasual].title;
    modalCasualComment.textContent = listToDo[mathCasual].description;
    modalCasualBtnX.textContent = 'X';

    //shapeIcone.append(modalCasualIcon);
    containerIconTitleMA.append(shapeIcone, modalCasualTitle);
    modalCasualActivity.append(containerIconTitleMA, modalCasualComment, modalCasualBtnX);
    insertContainer.append(modalCasualActivity)

//Aggiungere button per ricaricare l'attività casuale

    modalCasualBtnX.onclick = () => {
        modalCasualActivity.remove();
        backDark.style.display = 'none';
        }
}
//

const renderListToDo = function(){
    mainSectionEl.innerHTML = "";
    const cardList = cardListGen();
    listToDo.forEach((i) => {
        const cardEl = cardElGen(i);
        cardList.append(cardEl);

        //NEW
        const minusBtn = cardEl.querySelector(`#list__button-${i.id}`);
        //console.log(cardEl)

        minusBtn.onclick = () => cardEl.remove();
        /* minusBtn.onclick = () => {
            if (listToDo.length > 1) {
                console.log(listToDo.length)
                cardEl.remove();
            } else {
                console.log("Non ci sono attività da svolgere")
            }
        } */ //Torna sempre la length iniziale
        //

        // Aggiungi l'indice come parte dell'identificatore del pulsante di rotazione
        const arrowBtn = cardEl.querySelector(`#arrow-${i.id}`);
        if (arrowBtn) {
            arrowBtn.onclick = () => {
                const imgUrl = arrowBtn.firstChild.src;
                const commentEl = document.getElementById(`comment-${i.id}`);
                const containerToDoEl = commentEl.parentNode;//NEW
                if (imgUrl.includes('Img/icons8-freccia-espandi-50.png')){
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-comprimi-50.png';
                    commentEl.textContent = listToDo.find(item => item.id === i.id).description;

                    containerToDoEl.style.height = 'auto';//NEW
                } else {
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-espandi-50.png';
                    commentEl.textContent = '';
                    containerToDoEl.style.height = '2.5rem';//NEW
                }
            };
        }
    });

//Aggiungere spunta per segnare l'attività come svolta
    //Button in h2 (V) con position: absolute, Right: 0. 
    //Sfondo transparent => ad attività compiuta cambia sfondo e sottolinea h2

    mainSectionEl.append(cardList);
}

window.onload = () => {
    renderListToDo();
}

const btnPlus = document.querySelector('.insert__button');
const inputInsert = document.querySelector('input');

const modalError = document.querySelector('.modal-error');
const modalErrorTxt = document.querySelector('.modal-error__txt');
const btnError = document.querySelector('.modal-error__btn-OK');

const modalBox1 = document.querySelector('.box-modal1');
const modalTxtArea = document.querySelector('#box-modal1__textarea')
const modalSelectPriority = document.querySelector('#select-priority');
const modalTitle = document.querySelector('.box-modal1__title-item');

const startModal = document.querySelector('.start-modal');
const btnStartModal = document.querySelector('.start-modal__close');

btnStartModal.onclick = () => {
    startModal.style.display = 'none';
    backDark.style.display = 'none';
}

btnPlus.onclick = function(){
    const titleTxtEl = inputInsert.value;
    modalTitle.textContent = titleTxtEl;
    // inserire effetto button
    this.style.rotate = '180deg';

    if (listToDo.some(i => i.title === titleTxtEl)) {
        console.log('Hai già inserito questa attività');
        modalError.style.display = 'block';
        backDark.style.display = 'block';
        modalErrorTxt.textContent = `Hai già inserito "${titleTxtEl}"`;
    } else if ( titleTxtEl === '') {
        modalError.style.display = 'block';
        backDark.style.display = 'block';
        modalErrorTxt.textContent = 'Non puoi inserire una ToDo vuota';
    } else {
        modalBox1.style.display = 'flex';
        backDark.style.display = 'block';

        const modal1Btn = document.getElementById('modal1-btn-ok');
        let prioritySrc;
        //let priorityDeg; //NEW

        modal1Btn.onclick = () => {
            //modalBox1.style.scale = 0.5;
            const valuePriority = modalSelectPriority.value;
            modalBox1.style.display = 'none';
            backDark.style.display = 'none';
            
            if (valuePriority === 'alta'){
                prioritySrc = 'Img/icons8-favorites-64(1).png';
                //priorityDeg = 'alta'; //NEW
                console.log('alta');
            } else if (valuePriority === 'media'){
                prioritySrc = 'Img/icons8-nastro-segnalibro-64(1).png';
                //priorityDeg = 'media'; //NEW
                console.log('media');
            } else if (valuePriority === 'bassa'){
                prioritySrc = 'Img/icons8-modificare-64(1).png';
                //priorityDeg = 'bassa'; //NEW
                console.log('bassa');
            }

            const newToDo = {
                id: listToDo.length + 1,
                img: prioritySrc,
                priority: valuePriority, //NEW
                title: titleTxtEl,
                description: modalTxtArea.value,
                button:  { imgbutton: "Img/icons8-meno-24.png" }
            }

            console.log(newToDo);
            modalTxtArea.value = '';

            listToDo.push(newToDo);
            renderListToDo();
        };
    }
    inputInsert.value = '';
}

btnError.onclick = () => {
    modalError.style.display = 'none';
    backDark.style.display = 'none';
}