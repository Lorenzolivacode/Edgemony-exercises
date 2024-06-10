/* <section class="list">
    <div class="list__card">
        <img class="list__icon" src="Img/icons8-elemento-fuoco-30.png" alt="pippo">
        <h2 class="list__title-item"></h2>
        <p class="list__comment"></p>
        <button class="list__button">
            <img src="Img/icons8-meno-24.png" alt="">
        </button>
</div> */

const listToDo = [
    {
        id: 1,
        img: "Img/icons8-nastro-segnalibro-64(1).png",
        priority: "media", //NEW
        title: "La spesa",
        description: "Fatti mandare dalla mamma a prendere il latte",
        button: { imgbutton: "Img/icons8-meno-24.png" }
    },
    {
        id: 2,
        img: "Img/icons8-favorites-64(1).png",
        priority: "alta", //NEW
        title: "Compra un motorino",
        description: "Perchè è una Vespa speciale che risolve i problemi.",
        button: {imgbutton: "Img/icons8-meno-24.png"}
    }
];

//Aggiungere key "priority" (alta, media, bassa)
//per gestire i checkbox sul filtro

export { listToDo };