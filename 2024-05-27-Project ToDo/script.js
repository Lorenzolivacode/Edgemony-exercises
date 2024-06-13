
import { listToDo } from "./data/todos.js";
import { cardElGen, cardListGen, createShapeIcon, createModalCasualActivity } from "./modules/components.js"

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
const refreshBtn = document.getElementById('btn-refresh');

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
    modalFilterBtnX.textContent = 'X';

    modalFilterActivity.id = 'modal-filter-activity';
    modalFilterActivity.className = 'box-modal1';
    modalFilterBtnX.classList.add ('btn-component', 'start-modal__close');

    modalFilterActivity.style.display = 'block';
    console.log(modalFilterActivity)
    
    const modalFilterBtnOk = document.createElement('div');

    modalFilterBtnOk.textContent = 'OK';
    modalFilterBtnOk.classList.add ('btn-component', 'modal1__btn-OK');


    modalFilterActivity.append(containerHigh, containerMedium, containerLow, modalFilterBtnX, modalFilterBtnOk);
    insertContainer.append(modalFilterActivity)

    modalFilterBtnX.onclick = () => {
        modalFilterActivity.remove();
        backDark.style.display = 'none';
    }

    modalFilterBtnOk.onclick = () => {
        const listToDoNew = [];
        
        if(checkHigh.checked){
            listToDo.forEach((i) => {
                if (i.priority === 'alta'){
                    console.log ('check!')
                    listToDoNew.push(i)
                }
            })
        }
        if(checkMedium.checked){listToDo.forEach((i) => {
                if (i.priority === 'media'){
                    console.log ('check!')
                    listToDoNew.push(i)
                }
            })
        }
        if(checkLow.checked){listToDo.forEach((i) => {
                if (i.priority === 'bassa'){
                    console.log ('check!')
                    listToDoNew.push(i)
                }
            })
        }
        /* console.log("Alta:", checkHigh.checked)
        console.log("Media:", checkMedium.checked)
        console.log("Bassa:", checkLow.checked)
        console.log(listToDoNew) */

        backDark.remove();
        modalFilterActivity.remove();

        renderListToDo(listToDoNew);
    }

}

casualBtn.onclick = () => {
    createModalCasualActivity();
}

refreshBtn.onclick = () => renderListToDo();
//

const renderListToDo = function(listToDoGeneric = listToDo){
    mainSectionEl.innerHTML = "";
    const cardList = cardListGen();
    listToDoGeneric.forEach((i) => {
        const cardEl = cardElGen(i);
        cardList.append(cardEl);

        //NEW
        const minusBtn = cardEl.querySelector(`#list__button-${i.id}`);
        //console.log(cardEl)

        minusBtn.onclick = () => cardEl.remove();

        // Aggiungi l'indice come parte dell'identificatore del pulsante di rotazione
        const arrowBtn = cardEl.querySelector(`#arrow-${i.id}`);
        if (arrowBtn) {
            arrowBtn.onclick = () => {
                const imgUrl = arrowBtn.firstChild.src;
                const commentEl = document.getElementById(`comment-${i.id}`);
                const doneImgEl = document.getElementById(`done-${i.id}`);
                const containerToDoEl = commentEl.parentNode;//NEW
                if (imgUrl.includes('Img/icons8-freccia-espandi-50.png')){
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-comprimi-50.png';
                    commentEl.textContent = listToDoGeneric.find(item => item.id === i.id).description;
                    doneImgEl.style.height = '50%';

                    containerToDoEl.style.height = 'auto';//NEW
                } else {
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-espandi-50.png';
                    commentEl.textContent = '';
                    containerToDoEl.style.height = '2.5rem';//NEW
                    doneImgEl.style.height = '100%';
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

const mainEl = document.querySelector('.main');
//console.log (mainEl)

mainEl.onclick = (e) => {
    const doneEl = e.target;

    if (doneEl.className === 'done-img'){
        doneEl.src = './Img/icons8-segno-di-spunta-64-green.png';

        const numberId = doneEl.id.slice(5);
        //console.log(numberId);

        const titleElId = `title-${numberId}`;
        //console.log(titleElId);

        const titleDoneEl = document.getElementById(`${titleElId}`);
        //console.log(titleDoneEl);
        titleDoneEl.style.opacity = 0.7
    }
}