const list = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let number = prompt("Quantas cartas deseja? (4 a 14)");
number = parseInt(number, 10);
const selectedList = [];
let b = 0;

function start() {
    let display = document.querySelector("ul");
    list.sort(random);

    while (number < 4 || number > 14 || (number % 2) === 1) {
        number = parseInt(prompt("Quantas cartas deseja? (4 a 14)"));
    }

    for (let i = 0; i < number; i++) {
        display.innerHTML += `<li onclick="select(this)"><img src="media/front.png" alt="Carta ${i + 1}"></li>`;
    }

    for(a = 0; a < (number / 2); a++) {
        selectedList.push(list[a]);
        selectedList.push(list[a]);
    }
    
    selectedList.sort(random);
}

function select(card) {
    let cardBack = card.querySelector("img");

    if(card.classList[0] !== "first") {
        if(b < number) {
            card.classList.add("first");
            cardBack.setAttribute('src',`media/${selectedList[b]}.gif`);
            b++;
        }
    }
}

start();

function random() {
    return Math.random() - 0.5;
}