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

    for(a = 0; a < (number / 2); a++) {
        selectedList.push(list[a]);
        selectedList.push(list[a]);
    }

    selectedList.sort(random);

    for (let i = 0; i < number; i++) {
        display.innerHTML += `<li class="${selectedList[i]}" onclick="select(this)"><img src="media/front.png" alt="Carta ${i + 1}"><img class="gif" src="media/${selectedList[i]}.gif" alt="Gif ${i + 1}"></li>`;
    }

}

function select(card) {
    let backimg = card.querySelector("img");

    if(card.classList[1] === undefined) {
        
        if(b < number) {
            card.classList.add("open");
            backimg.classList.add("turnedimg");
            b++;
        }

    }
}

start();

function random() {
    return Math.random() - 0.5;
}