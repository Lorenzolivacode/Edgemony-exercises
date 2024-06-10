const cardElGen = (obj) => {
    const containerListCard = document.createElement('div');
    const iconEl = document.createElement('img');
    const containerToDoEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const commentEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    const minusEl = document.createElement('img');

    const arrowBtn = document.createElement('button');
    const imgArrowBtn = document.createElement('img');
    
    arrowBtn.className = "list__arrow";
    arrowBtn.classList.add("arrow-down", "btn-component");

    commentEl.id = `comment-${obj.id}`;
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
    
    minusEl.src = obj.button.imgbutton;
    minusEl.alt = "Bottone rimuovi";

    containerToDoEl.append(titleEl , commentEl, arrowBtn);
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
//

export {
    cardElGen,
    cardListGen,
    createShapeIcon
}