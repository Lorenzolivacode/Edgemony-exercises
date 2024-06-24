export function CE(
  tag,
  nameClass = "",
  /* attrs = {}, */
  parent = document.body
) {
  // creo elemento
  const el = document.createElement(tag);
  el.className = `${nameClass}`;

  // attributi per me sono un object, posso iterarlo
  // const keys = Object.keys(attrs);
  // keys.forEach((prop) => {
  //     if(prop in el){
  //         el[prop] = attrs[prop];
  //         // se l'ho impostat vado avanti nel for e non eseguo il resto per questo elemento
  //         return;
  //     }

  //     el.setAttribute(prop, attrs[prop]);
  // })

  /* for (let prop in attrs) {
    // se la proprietà (ex. className) esite la imposto
    if (prop in el) {
      el[prop] = attrs[prop];
      continue;
    }

    el.setAttribute(prop, attrs[prop]);
  } */

  parent.append(el);

  return el;
}

export async function GET() {
  const responseGet = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await responseGet.json();

  console.log(data);
  return data;
}

export async function articleListGen() {
  const dataArticle = await GET();
  const listArticle = document.createElement("div");

  dataArticle.forEach((elementObj) => {
    const titleEl = CE("h2", "title-el", listArticle);
    titleEl.textContent = `${elementObj.title}`;

    const contentArticle = CE("p", "content-title", listArticle);
    contentArticle.textContent = `${elementObj.body}`;
  });

  return listArticle;
}
