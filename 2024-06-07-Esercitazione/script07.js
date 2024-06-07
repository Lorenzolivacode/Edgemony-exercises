import { API_KEY } from "./keys.js";
import { renderListCard, renderCard } from "./function.js";

/* 
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
 */

const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

fetch ("https://developer.themoviedb.org/reference/movie-popular-list", options).then((res) => res.json()).then((data) =>{
//fetch ("https://fakestoreapi.com/products").then((res) => res.json()).then((data) =>{
    console.log(data);
    renderListCard(data);
    //renderCard(data[1]);

}).catch((err) => {
    console.error("ERRORE", err);

    const title = document.createElement("h1");
    title.textContent = "Page not found";

    containerEl.append(title);
  });

  console.log('ciao')