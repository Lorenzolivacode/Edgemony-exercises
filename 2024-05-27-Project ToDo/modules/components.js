import { listToDo } from "./../data/todos.js";

const cardElGen = (obj) => {
    const containerListCard = document.createElement('div');
    const iconEl = document.createElement('img');
    const containerToDoEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const commentEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    const doneImgEl = document.createElement('img');
    const minusEl = document.createElement('img');

    const arrowBtn = document.createElement('button');
    const imgArrowBtn = document.createElement('img');
    
    arrowBtn.className = "list__arrow";
    arrowBtn.classList.add("arrow-down", "btn-component");

    commentEl.id = `comment-${obj.id}`;
    titleEl.id = `title-${obj.id}`;
    arrowBtn.id = `arrow-${obj.id}`;
    //NEW
    //containerListCard.id = `list__card-${obj.id}`;
    buttonEl.id = `list__button-${obj.id}`;
    //
    imgArrowBtn.src = "./Img/icons8-freccia-espandi-50.png";
    imgArrowBtn.alt = "Espandi";
    
    arrowBtn.append(imgArrowBtn);

    containerListCard.className = "list__card";
    iconEl.className = "list__icon";
    containerToDoEl.className = "list__container-todo";
    titleEl.className = "list__title-item";
    commentEl.className = "list__comment";
    buttonEl.className = "list__button";

    iconEl.src = obj.img;
    iconEl.alt = "Icona priorità";

    titleEl.textContent = obj.title;

    doneImgEl.id = `done-${obj.id}`;
    doneImgEl.className = "done-img";
    doneImgEl.src = './Img/icons8-segno-di-spunta-64.png';
    
    minusEl.src = obj.button.imgbutton;
    minusEl.alt = "Bottone rimuovi";

    containerToDoEl.append(titleEl , commentEl, arrowBtn, doneImgEl);
    buttonEl.append(minusEl);
    containerListCard.append(iconEl, containerToDoEl, buttonEl);
    return containerListCard;
}

const cardListGen = () => {
    const containerSectionList = document.createElement('section');
    containerSectionList.className = 'list';
    return containerSectionList;
}

//NEW
function createShapeIcon(srcFunction){
    const shapeIcone = document.createElement('div');
    const iconPriority = document.createElement('img');

    shapeIcone.className = 'shape-icon';
    iconPriority.src = srcFunction;

    shapeIcone.append(iconPriority);

    return shapeIcone;
}

function mathCasualGen (){
    const mathCasual = Number.parseInt(Math.random() * listToDo.length);
    return mathCasual;
}

function createModalCasualActivity(){
    const backDark = document.querySelector('.back-dark');
    backDark.style.display = 'block';
    const insertContainer = document.querySelector('.insert-container');

    const mathCasual = mathCasualGen();
    console.log(mathCasual);

    const modalCasualActivity = document.createElement('div');

    const containerIconTitleMA = document.createElement('div');
    containerIconTitleMA.style.display = 'flex';
    const shapeIcone = createShapeIcon(listToDo[mathCasual].img);
    //const modalCasualIcon = document.createElement('img');
    const modalCasualTitle = document.createElement('h2');
    const modalCasualComment = document.createElement('p');
    const modalCasualBtnX = document.createElement('button');
    const refreshCasualBtn = document.createElement('button');
    const refreshCasualImg = document.createElement('img');

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
    modalCasualBtnX.id = 'casual-btn-x';

    refreshCasualBtn.classList.add('btn-component', 'option_btn', 'modal1__btn-OK');
    refreshCasualBtn.id = 'modal-casual__btn-refresh';
    refreshCasualBtn.style.scale = 2;
    refreshCasualBtn.title = "Scegli un'altra attività casualmente";
    refreshCasualImg.src = "Img/icons8-curly-arrow-30.png";
    refreshCasualImg.alt = "icon attività casuale"
    refreshCasualBtn.append(refreshCasualImg);

    //shapeIcone.append(modalCasualIcon);
    containerIconTitleMA.append(shapeIcone, modalCasualTitle);
    modalCasualActivity.append(containerIconTitleMA, modalCasualComment, modalCasualBtnX, refreshCasualBtn);
    insertContainer.append(modalCasualActivity)

    refreshCasualBtn.onclick = () => {
        modalCasualActivity.remove();
        backDark.style.display = 'none';

        createModalCasualActivity();
    }

    modalCasualBtnX.onclick = () => {
        modalCasualActivity.remove();
        backDark.style.display = 'none';
        }
}
//

export {
    cardElGen,
    cardListGen,
    createShapeIcon,
    createModalCasualActivity
}