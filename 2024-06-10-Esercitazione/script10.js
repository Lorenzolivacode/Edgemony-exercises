import { API_KEY } from "./keys.js";
import { renderListCard, QS, filterFilm, GET } from "./function.js";

/* 
OLD
    Esercizio 1: Effettuiamo la chiamata all'API di MovieDB e stampiamo a DOM le card dei movies ottenuti all'endpoint 
        /popular https://developer.themoviedb.org/reference/movie-popular-list
    Esercizio 2: Inseriamo un catch a fine catena then per gestire eventuali errori (provate a crearne uno per assicurarvi il 
        corretto funzionamento del catch - poi potete anche lasciare il codice funzionante)
    Esercizio 3 (Opzionale): Proviamo a filtrare i risultati con una searchBar.
    Esercizio 4 (Opzionale): L'oggetto response, ci da a disposizione il valore page, proviamo a paginare! la documentazione 
        ci da qualche suggerimento.

    (non richiesto - lo vedremo Lunedì insieme, ma se volete provare ecco qui :pesce:)

    Esercizio 5 (Opzionale pazzo): e se facessimo dei bottoni che al click cambiano l'endpoint tipo di default stampate /popular  
        come da Es1 e al click di un button per esempio "TOP_RATED" /top_rated 
        https://developer.themoviedb.org/reference/movie-top-rated-list 

NEW
    Esercizio 1: Basandoci sulla lezione del giorno, convertiamo i nostri fetch/then con una funzione Async/Await riutilizzabile 
        per più endpoint
    Esercizio 2: Implementiamo la paginazione per chi non l'ha già fatto, in modo dinamico + cambio tipo di dati 
        "serie tv o movie"
    Esercizio 3 (Opzionale): e se provassimo a filtrare per genre? stampata la lista di generi ci sono degli id, 
        forse dobbiamo farlo con quello? o forse c'è un endpoint specifico?
 */

const container = QS('.container');
const inputTxt = QS('.input-txt')

const startBtn = QS('#page-start');
const previousBtn = QS('#page-previous');
const nextBtn = QS('#page-next');
//console.log(previousBtn, nextBtn)

const containerSection = QS ('.container-section');
const sectionMovieBtn = QS('#movie');
const sectionTvBtn = QS('#tv');

const pageShow = QS('.c-pg > span');
/* console.log(pageShow.textContent); */

const BASE_URL = "https://api.themoviedb.org/3/"
const sectionMovie = "movie";
const sectionTv = "tv";
const endpoint = "popular?page=";

let actualSection = 'movie';
let pageNumber = 1;

//GET(5);

GET(sectionMovie);

pageShow.textContent = pageNumber;

containerSection.addEventListener('click', (e) => {
    const sectionId = e.target.id;

    if (e.target.tagName === "BUTTON"){
        console.log(sectionId);
        pageNumber = 1;
        actualSection = sectionId;

        pageShow.textContent = pageNumber;


        GET(sectionId);
    }
})

startBtn.addEventListener('click', () => {
    if(pageNumber > 1){
        pageNumber = 1;

        pageShow.textContent = pageNumber;

        GET(actualSection, pageNumber);
    }
})

previousBtn.addEventListener('click', () => {
    if(pageNumber > 1){
        pageNumber--;

        pageShow.textContent = pageNumber;

        GET(actualSection, pageNumber);
    }
})

nextBtn.addEventListener('click', () => {
    pageNumber++;

    pageShow.textContent = pageNumber;

    GET(actualSection, pageNumber);
})

  console.log('ciao')