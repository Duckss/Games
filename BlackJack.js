/*class Dealer {
    constructor() {
        this.animatio = gsap.from(".Owner", {
            opacity: -1,

            duration: 3,
            onComplete: Deal,
            callbackScope: this,
        });
        this.message = "Greetings!";
        function Deal() {}
    }
}*/

/*class deal {
    constructor() {
        const DealerAnimation = gsap.from(".Owner", {
            opacity: -1,
            duration: 3,
        });
    }
}

const animation = new deal();*/

// =======================STARTING THE GAME========================================
const titleCard = document.querySelector(".TitleCard"); // BlackJack
const theCards = document.querySelector(".TheCards"); // Cards:
const theResult = document.querySelector(".TheResult"); // Sum:
const theStatus = document.querySelector(".TheEnd"); // Status:
const cardDeck = document.querySelector(".CardDeck"); // IMAGE OF CARD DECK
const animate = document.querySelector(".Card1"); // Card Animation
const animate2 = document.querySelector(".Card2"); // Card Animation
// Buttons

const theIntro = document.querySelector(".Intro"); // Want to play black jack?
const testButton = document.querySelector(".TheButton"); // Start Game
const forButton = document.querySelector(".ForButton"); // Container for the Buttons

const theImage = document.querySelector(".CardDeck");
const newButton = document.querySelector(".NewButton"); //[Draw a card?]

testButton.addEventListener("click", Test2);
// EXECUTING GAME

function Test2() {
    //Draw a Card
    newButton.style.display = "block";
    //Title
    titleCard.style.display = "block";
    //TheCards
    theCards.style.display = "block";
    //TheResult
    theResult.style.display = "block";
    //TheStatus
    theStatus.style.display = "block";
    //CardDeck
    cardDeck.style.display = "block";

    // TESTBUTTON AND INTRO
    testButton.style.display = "none";
    theIntro.style.display = "none";

    //IMAGE OF CARD DECK

    ForNewButton(forButton);

    function ForNewButton(a) {
        a.style.justifyContent = "normal";
        a.style.margin = "10px";
        a.style.marginTop = "30px";
    }
}

//========================FOR "DRAW A CARD" BUTTON========================================

newButton.addEventListener("click", Test3);

function Test3() {
    const Random = Math.floor(Math.random() * 3 + 1);

    if (Random === 2) {
        //animate.style.color = "blue";
        animate.style.backgroundImage += "url(Images/TwoCard.jpg)"; // .CARD
        animate.style.height = "75px";
        animate.style.width = "45px";
        animate.style.margin = "10px";

        gsap.from(".Card1", {
            duration: 1,
            y: "-100px",
            x: "-100px",
        });
    }
    if (Random === 3) {
        //animate.style.color = "yellow"; //Not working
        animate2.style.backgroundImage += "url(Images/ThirdCard.jpg)";
        animate2.style.height = "75px";
        animate2.style.width = "45px";

        gsap.from(".Card2", {
            duration: 1,
            y: "-120px",
            x: "-90px",
        });
    }
    if (Random === 4) {
        CreateButton.style.color = "lightBlue";
    }
    if (Random === 5) {
        CreateButton.style.color = "purple";
    }
    if (Random === 6) {
        CreateButton.style.color = "black";
    }
    if (Random === 7) {
        CreateButton.style.color = "orange";
    }
    if (Random === 8) {
        CreateButton.style.color = "brown";
    }
    if (Random === 9) {
        CreateButton.style.color = "lightGreen";
    }
    if (Random === 10) {
        CreateButton.style.color = "lightpurple";
    }
}

//=======================================================
