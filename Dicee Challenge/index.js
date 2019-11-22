var dice1 = Math.ceil(Math.random() * 6);
var dice2 = Math.ceil(Math.random() * 6);
var diceimg1 = "images/dice" + dice1 + ".png";
var diceimg2 = "images/dice" + dice2 + ".png";
var result;

function determine()
{
    if (result === 1)
        document.querySelector("h1").innerHTML = "Player 1 wins the game";
    else if (result === 2)
        document.querySelector("h1").innerHTML = "Player 2 wins the game";
    else if (result === 0)
        document.querySelector("h1").innerHTML = "Draw !!";
}

function shuffle()
{
    document.querySelectorAll("img")[0].setAttribute("src", diceimg1);
    document.querySelectorAll("img")[1].setAttribute("src", diceimg2);
    if (dice1 > dice2)
        result = 1;
    else if (dice1 < dice2)
        result = 2;
    else
        result = 0;
    determine();
}

shuffle();
