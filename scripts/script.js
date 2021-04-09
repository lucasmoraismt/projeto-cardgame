const list = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let number = prompt("Quantas cartas deseja? (4 a 14)");
number = parseInt(number, 10);
const selectedList = [];

let count = 0;
let victory = 0;
let clickedCard = null;

function start() {
    let display = document.querySelector("ul");
    list.sort(random);

    while (number < 4 || number > 14 || (number % 2) === 1) {
        number = parseInt(prompt("Quantas cartas deseja? (4 a 14)"));
    }

    for(a = 0; a < (number / 2); a++) {
        selectedList.push(list[a]);
        selectedList.push(list[a]);
    }

    selectedList.sort(random);

    for (let i = 0; i < number; i++) {
        display.innerHTML += `<li id="${selectedList[i]}" onclick="select(this)">
                                    <img src="media/front.png" alt="Carta ${i + 1}">
                                    <img class="gif" src="media/${selectedList[i]}.gif" alt="Gif ${i + 1}">
                                </li>`;
    }
}
start();

function select(card) {
    if (card === clickedCard) {
        return;
    }

    let backImg = card.querySelector("img");

    if(card.classList[0] === undefined) {
        card.classList.add("open");
        backImg.classList.add("turned-img");
    }

    if(clickedCard === null) {
        clickedCard = card;
    } else if(card.id !== clickedCard.id) {
        setTimeout(togle, 1000, card, clickedCard);
        clickedCard = null;
    } else {
        clickedCard = null;
        victory++;
    }

    count++;
    win();
}

function togle(card1, card2) {
    card1.classList.remove("open");
    card2.classList.remove("open");
}

function win() {
    if(victory == (number / 2)) {
        setTimeout(reload, 50);
    }
}

function reload() {
    alert(`Parabéns! Você ganhou em ${count / 2} jogadas`);
    let again = (window.confirm("Deseja jogar novamente?"));
    
    if(again) {
        document.location.reload(true);
    }
}

function random() {
    return Math.random() - 0.5;
}