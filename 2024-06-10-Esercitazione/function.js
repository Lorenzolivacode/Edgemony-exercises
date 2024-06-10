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

    cardEl.append(cardTitle, cardImg, cardVote);
    container.append(cardEl);
}

export function renderListCard (dataList){
    const container = QS('.container');
    container.innerHTML = "";

    dataList.forEach((film) => {
        renderCard(film);
        //console.log(film.title)

        /* if (cardVote.textContent < 5){
            cardVote.style.boxShadow = '0 0 15px rgb(194, 24, 24)';
        } */
    });
}

export function filterFilm(title, data) {
    const container = QS('.container');
    const newFilmsList = data.filter((filmObj) => filmObj.title.toLowerCase().includes(title));

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
}