
import { listToDo } from "./data/todos.js";
import { cardElGen, cardListGen } from "./modules/components.js"

const mainSectionEl = document.querySelector('main');

const renderListToDo = function(){
    mainSectionEl.innerHTML = "";
    const cardList = cardListGen();
    listToDo.forEach((i) => {
        const cardEl = cardElGen(i);
        cardList.append(cardEl);
        // Aggiungi l'indice come parte dell'identificatore del pulsante di rotazione
        const arrowBtn = cardEl.querySelector(`#arrow-${i.id}`);
        if (arrowBtn) {
            arrowBtn.onclick = () => {
                const imgUrl = arrowBtn.firstChild.src;
                const commentEl = document.getElementById(`comment-${i.id}`);
                if (imgUrl.includes('Img/icons8-freccia-espandi-50.png')){
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-comprimi-50.png';
                    commentEl.textContent = listToDo.find(item => item.id === i.id).description;
                } else {
                    arrowBtn.firstChild.src = 'Img/icons8-freccia-espandi-50.png';
                    commentEl.textContent = '';
                }
            };
        }
    });
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

const backDark = document.querySelector('.back-dark');

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
        const valuePriority = modalSelectPriority.value
        let prioritySrc;

        
        modal1Btn.onclick = () => {
            //modalBox1.style.scale = 0.5;
            modalBox1.style.display = 'none';
            backDark.style.display = 'none';
            
            if (valuePriority === 'alta'){
                prioritySrc = 'Img/icons8-favorites-64(1).png';
                console.log('alta');
            } else if (valuePriority === 'media'){
                prioritySrc = 'Img/icons8-nastro-segnalibro-64(1).png';
                console.log('media');
            } else if (valuePriority === 'bassa'){
                prioritySrc = 'Img/icons8-modificare-64(1).png';
                console.log('bassa');
            }

            const newToDo = {
                id: listToDo.length + 1,
                img: prioritySrc,
                title: titleTxtEl,
                description: modalTxtArea.value,
                button:  { imgbutton: "Img/icons8-meno-24.png" }
            }

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