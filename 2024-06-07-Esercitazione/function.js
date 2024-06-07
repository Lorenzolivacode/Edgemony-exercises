export function QS (tag){
    const QS = document.querySelector(tag);
    return QS;
}

export function CE (ele){
    const CE = document.createElement(ele);
    return CE;
};

export function renderCard (filmObj){
    const cardEl = CE('div');
    cardEl.className = 'card';

    const cardTitle = CE('h2');
    cardTitle.className = 'card__title';
    cardTitle.textContent = filmObj.title;

    const cardImg = CE('img');
    cardImg.className = 'card__img';
    cardImg.src = `https://image.tmdb.org/t/p/w200/${filmObj.poster_path}`

    const cardVote = CE('span');
    cardVote.className = 'card__vote';
    cardVote.textContent = filmObj.vote_average;

    cardEl.append(cardTitle, cardImg, cardVote);
}

export function renderListCard (dataList){
    const container = QS('.container');
    container.innerHTML = "";

    dataList.forEach((filmObj) => {
        renderCard(filmObj);
    });

    container.append
}