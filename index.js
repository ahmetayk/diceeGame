// Player 1 Dicee 

var randomNumber1 = Math.ceil (Math.random() * 6); 

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

//  Player 2 Dicee

var randomNumber2 = Math.ceil (Math.random() * 6); 

if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

// Dicee Result

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}