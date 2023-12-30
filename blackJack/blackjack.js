let player = {
    name: "Per",
    chips: 145
}

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if (number === 1) {
        return 11;
    } else if (number > 10) {
        return 10;
    } else {
        return number;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " ;
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?";
        
    } else if (sum === 21) {
        message = "Great! you've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }
    sumEl.textContent = `Sum: ${sum}`;
    messageEl.textContent = message;
}

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
    
}
