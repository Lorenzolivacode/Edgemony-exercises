/* Esercitazione pomeridiana:

    Esercizio 1: Ricreare l'orologio proposto a lezione che ad ogni 1000ms stampa a console la data attuale;
    Esercizio 2: Stampare a DOM l'orologio creato con il primo esercizio.
    Esercizio 3 (Opzionale): date uno stile piacevole al vostro orologio!

    Esercizio 4 (Opzionale): volete provare a stampare solo HH:MM:SS? vediamo che vi inventate! :pesce: 
    se ve la sentite aggiungete anche i 2 bottoni che startano e stoppano l'orologio! */

//1
const printDate = setInterval (() => {
    const dateNow = new Date();
    console.log(dateNow);
}, 1000);

setTimeout (() => {
    clearInterval(printDate);
}, 10000);

//2-3-4
function CE (ele){
    const CE = document.createElement(ele);
    return CE;
};

const body = document.querySelector('body');

const clock = CE('div');
clock.classList.add('clock-shape', 'clock');

const pHours = CE ('p');
pHours.classList.add('time-style','clock__hours-style')

body.append(clock);
clock.append(pHours);

const clockTime = setInterval(() => {
    const date1 = new Date();
    pHours.textContent = `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
}, 1);

//TIMER
const timer = CE('div');
timer.classList.add('clock-shape', 'timer');

const pTimer = CE('p');
pTimer.classList.add('time-style', 'timer__time-style')

const containerBtn = CE('div');
containerBtn.className = 'container-btn';

const btnStart = CE('button');
btnStart.textContent = 'Start';
btnStart.className = 'btn-style';
const btnStop = CE('button');
btnStop.textContent = 'Stop';
btnStop.className = 'btn-style';

body.append(timer, containerBtn);
timer.append(pTimer);
containerBtn.append(btnStart, btnStop);

let numberStart = 10;

const runTimer = () => {
    const id = setInterval(() => {
        if (numberStart === 0){
            clearInterval(id)
            const modalBoom = CE('div');
            modalBoom.className = 'modal-boom';

            const btnCloseModal = CE('button');
            btnCloseModal.className = 'btn-modal';
            btnCloseModal.textContent = 'X';
            modalBoom.append(btnCloseModal);

            btnCloseModal.addEventListener('click', () => {
                modalBoom.remove();
            });

            body.append(modalBoom);
        }

        pTimer.textContent = numberStart;
        numberStart = --numberStart;

    }, 1000);

    //console.log(id)
    return id;
};


let timeId = runTimer();

btnStart.addEventListener('click', () =>{
    clearInterval(timeId);
    numberStart = 10;
    timeId = runTimer();
    console.log(timeId)
});

btnStop.addEventListener('click', () => {
    console.log(timeId);
    clearInterval(timeId);
})