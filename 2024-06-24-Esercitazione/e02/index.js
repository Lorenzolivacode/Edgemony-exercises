import { CE, GET, articleListGen } from "./js/functions.js";

const header = CE("header", "header");
console.log(header);

const logo = CE("img", "logo", header);
logo.src = "./img/icons8-scooby-doo-48.png";

const linkUl = CE("ul", "", header);
const li1 = CE("li", "", linkUl);
const linkLi1 = CE("a", "", li1);
linkLi1.src = "https://www.google.it/";
linkLi1.textContent = "Google";
const li2 = CE("li", "", linkUl);
const linkLi2 = CE("a", "", li2);
linkLi2.src = "https://www.lorenzoliva.it/";
linkLi2.textContent = "Il mio fantasmagorico sito";

console.log(linkUl);

const containerMain = CE("div", "container");

const main = CE("main", "main", containerMain);

const side = CE("aside", "side", containerMain);
const titleSide1 = CE("h2", "title-side", side);
titleSide1.textContent = "Lorem ipsum dolor sit amet.";
const pSide1 = CE("p", "p-side", side);
pSide1.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint harum incidunt necessitatibus, placeat perspiciatis.";
const titleSide2 = CE("h2", "title-side", side);
titleSide2.textContent = "Lorem ipsum dolor sit amet.";
const pSide2 = CE("p", "p-side", side);
pSide2.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint harum incidunt necessitatibus, placeat perspiciatis.";
const titleSide3 = CE("h2", "title-side", side);
titleSide3.textContent = "Lorem ipsum dolor sit amet.";
const pSide3 = CE("p", "p-side", side);
pSide3.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint harum incidunt necessitatibus, placeat perspiciatis.";

const footer = CE("footer", "footer");

const listArticle = await articleListGen();
main.append(listArticle);
