export function QS (tag){
    const QS = document.querySelector(tag);
    return QS;
}

export function CE (ele){
    const CE = document.createElement(ele);
    return CE;
};

export function renderCard (filmObj){
    const container = QS('.container');

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
    cardVote.textContent = `Voto: ${filmObj.vote_average.toFixed(1)}`;

    cardEl.append(cardTitle, cardImg, cardVote);
    container.append(cardEl);
}

export function renderListCard (dataList){
    const container = QS('.container');
    container.innerHTML = "";

    dataList.forEach((film) => {
        renderCard(film);
        //console.log(film.title)
    });
}

export function filterFilm(title, data) {
    const container = QS('.container');
    const newFilmsList = data.filter((filmObj) => filmObj.title.toLowerCase().includes(title));

    container.innerHTML = "";

    renderListCard(newFilmsList);
}