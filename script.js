
const suits = ["?", "?", "?", "?"];

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

 

const drawButton = document.getElementById("drawButton");

const hand1 = document.getElementById("hand1");

const hand2 = document.getElementById("hand2");

 

function createDeck() {

  const deck = [];

  for (const suit of suits) {

    for (const rank of ranks) {

      deck.push({ suit, rank });

    }

  }

  return deck;

}

 

function shuffleDeck(deck) {

  for (let i = deck.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [deck[i], deck[j]] = [deck[j], deck[i]];

  }

}

 

function drawCard(deck) {

  return deck.pop();

}

 

function displayHand(hand, handElement) {

  handElement.innerHTML = "";

  for (const card of hand) {

    const cardElement = document.createElement("div");

    cardElement.classList.add("card");

    cardElement.textContent = `${card.rank}${card.suit}`;

    handElement.appendChild(cardElement);

  }

}

 

const deck = createDeck();

shuffleDeck(deck);

 

const player1Hand = [drawCard(deck), drawCard(deck), drawCard(deck)];

const player2Hand = [drawCard(deck), drawCard(deck), drawCard(deck)];

 

displayHand(player1Hand, hand1);

displayHand(player2Hand, hand2);

 

drawButton.addEventListener("click", () => {

  const drawnCard = drawCard(deck);

  player1Hand.push(drawnCard);

  displayHand(player1Hand, hand1);

});

 
