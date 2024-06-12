import { API_KEY } from "./keys.js";

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
    cardTitle.textContent = filmObj.title ?? filmObj.name;

    const cardImg = CE('img');
    cardImg.className = 'card__img';
    cardImg.src = `https://image.tmdb.org/t/p/w200/${filmObj.poster_path}`

    const cardVote = CE('span');
    cardVote.className = 'card__vote';
    cardVote.textContent = `Voto: ${filmObj.vote_average.toFixed(1)}`;
    //console.log(Number(cardVote.textContent.slice(6)))

    if (Number(cardVote.textContent.slice(6)) < 5){
            cardVote.style.boxShadow = '0 0 15px inset rgb(194, 24, 24)';
    } else if (Number(cardVote.textContent.slice(6)) < 7){
        cardVote.style.boxShadow = 'none';
    } else if (Number(cardVote.textContent.slice(6)) < 8){
        cardVote.style.boxShadow = '0 0 15px inset rgb(62, 171, 54)';
    } else {
        cardVote.style.color = 'rgb(197, 155, 2)';
    }  

    //
    const containerArrow = CE('div');
    containerArrow.className = 'c-arrow';

    const arrowDescription = CE('img');
    arrowDescription.className = 'arrow-description';
    arrowDescription.id = `arrow-${filmObj.id}`;
    arrowDescription.src = './icons8-freccia-comprimi-80.png';

    const descriptionCard = CE('div');
    descriptionCard.className = 'description-card';
    descriptionCard.id = `des-${filmObj.id}`;

    const releaseDate = CE('span');
    const descriptionOverview = CE('p');

    releaseDate.textContent = `Data uscita: ${filmObj.release_date}`;
    descriptionOverview.textContent = filmObj.overview;

    containerArrow.append(arrowDescription);
    descriptionCard.append(releaseDate, descriptionOverview);
    cardEl.append(descriptionCard);
    //

    cardEl.append(cardTitle, cardImg, cardVote, containerArrow);
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
    
    /* {
    if (filmObj.title){
        filmObj.title.toLowerCase().includes(title);
    } else {
        filmObj.name.toLowerCase().includes(name);
    }}); */

    container.innerHTML = "";

    renderListCard(newFilmsList);
}

const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

const inputTxt = QS('.input-txt')

const BASE_URL = "https://api.themoviedb.org/3/"
const sectionMovie = "movie/";
const endpoint = "popular?page=";

export async function GET(section, page = 1){
    console.log(page);

    const responseGet = await fetch(
    `${BASE_URL}${section}/${endpoint}${page}`,
    options);

    const data = await responseGet.json();

    console.log(data);

    /* console.log("log di get", {
        page: data.page,
        section,
    }); */

    //return data;

    renderListCard(data.results);

    inputTxt.addEventListener ('input', (event) => {
        const InputValue = event.target.value.toLowerCase();
        filterFilm(InputValue, data.results);
    });
    return data;
}

/* export async function descriptionGen(section, page = 1){
    const dataList = await GET(section, page = 1);

    console.log(dataList.results)

    dataList.results.forEach((film) => {   
        const container = QS('.container');     
        container.addEventListener('mouseover', (e) => {
            const card = e.target;
        
            if (card.className === 'card'){
            console.log(card)
        
            const descriptionCard = CE('div');
            descriptionCard.className = 'description-card';
        
            const releaseDate = CE('span');
            const descriptionOverview = CE('p');

            releaseDate.textContent = `Data uscita: ${film.release_date}`;
            descriptionOverview.textContent = film.overview;
        
            descriptionCard.append(releaseDate, descriptionOverview);
            card.append(descriptionCard);
            }
        })
    });
} */ //Apre per ogni card tanti container quante sono le card