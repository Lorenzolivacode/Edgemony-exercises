/* Esercitazione del giorno:

    Esercizio 1: manipoliamo il dom e sfruttiamo l'event bubbling la propagazione degli eventi: 

        create un elemento parent tipo div che ingloba 2 bottoni o anche 3, ascoltiamo l'evento dall'elemento parent e diamo dei comportamenti diversi per ogni bottone che verrà cliccato (va bene anche un console log)

    Esercizio 2: provate a creare una funzione globale che logga il this, chiamare questa funzione al click e provate a leggere il contesto di event.target 
    Esercizio 3 (Opzionale): proviamo a creare una modale che verrà creata al click di un button messo a DOM, dentro questa modale monteremo 3 elementi cliccabili, 2 button "YES" / "NO" che al click faranno un semplice console log, e un bottone close per chiudere la modale
    Esercizio 4 (Opzionale): inseriamo pure un bel setTimeout e fate chiudere la modale ad ogni modo dopo 5000ms
    Esercizio 5 (Opzionale): vogliamo mostrare il timer dei 5 secondi prima della chiusura della modale? proviamoci
    Esercizio 6 (Opzionale - Per i pazzi): Volete provare ad esplorare gli eventi dell'eventListener? perchè non provate a vedere come leggere il valore del campo input tramite un eventListener? provate a mettere un campo input che all'inserimento di qualcosa, al click vi apre la modale con un messaggio legato a quello che avete inserito al campo input es:

       input che dice: "inserisci il tuo nome" e al click di un button si apre una modale con scritto "benvenuto Lorenzo" */

function QS (tag){
    const QS = document.querySelector(tag);
    return QS;
}

function CE (ele){
    const CE = document.createElement(ele);
    return CE;
};

function createModal (){
    const modal = CE('div');
    modal.className = 'modal';

    const welcomTxt = CE('h2');
    welcomTxt.textContent = `Welcom ${inputTxt}`;

    const pModal = CE('p');
    pModal.textContent = 'Are you ready to...?';

    modal.append(welcomTxt, pModal);
    containerParent.append(modal);
    return modal;
}

function createBtn (text){
    const btn = CE('button');
    btn.className = 'btn';
    btn.textContent = text;
    btn.id = `btn-${text}`;
    return btn;
}

function createImgModal (src){
    const imageModal = CE('img');
    imageModal.className = 'image-modal';
    imageModal.src = src;

    return imageModal;
}

const body = QS('body');
const containerParent = QS('.container');
const input = QS('.container > input');
const btnRun = QS('.btn-run');
const btnRest = QS('.btn-slow');

const inputTxt = input.value;
console.log(inputTxt);

function logName() {
    console.log("SONO LOG NAME", this)
}

containerParent.addEventListener('click', (event) => {
    console.log(event.target.className)
    if (event.target.className === 'btn btn-run'){
        console.log('RUN', this);
        const modalRun = createModal();
        modalRun.id = 'modal-run';

        const btnYes = createBtn('YES');
        const btnCrash = createBtn('CRASH');
        const btnNo = createBtn('NO');
        const contBtn = CE('div');

        contBtn.className = 'cont-btn';
        contBtn.append(btnYes, btnCrash, btnNo);

        modalRun.append(contBtn);

        logName.call();

        modalRun.addEventListener('click', (event) => {
            if (event.target.id === 'btn-YES'){
                console.log('yes');
                btnYes.remove();
                btnNo.remove();
            } else if (event.target.id === 'btn-NO'){
                console.log('no');
                btnNo.remove();
            }if (event.target.id === 'btn-CRASH'){
                console.log('Crash Bandicoot');
                modalRun.remove();

                const backDark = CE('div');
                backDark.className = 'back-dark';

                const imgCrash = createImgModal("Img/Crash.png");
                body.append(backDark, imgCrash);

                setTimeout(() => {
                    imgCrash.remove();
                    backDark.remove();
                }, 5000);
            }
        })
    } else if (event.target.className === 'btn btn-slow'){
        const modalRest = createModal();
        modalRest.id = 'modal-rest';

        const btnSleep = createBtn('Sleep...');
        modalRest.append(btnSleep);

        modalRest.addEventListener('click', (event) => {
            if (event.target.id === 'btn-Sleep...'){
                console.log(event.target.id)
                modalRest.remove();

                const backDark = CE('div');
                backDark.className = 'back-dark';

                const imgSleep = createImgModal("Img/Sleep.png");
                body.append(backDark, imgSleep);

                setTimeout(() => {
                    imgSleep.remove();
                    backDark.remove();
                }, 5000);
            }
        })
    }
})

