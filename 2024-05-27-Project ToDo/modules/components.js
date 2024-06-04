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
    iconEl.alt = "pippo";

    titleEl.textContent = obj.title;
    
    minusEl.src = obj.button.imgbutton;
    minusEl.alt = "pippo";

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

export {
    cardElGen,
    cardListGen
}