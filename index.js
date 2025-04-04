var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; 
document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 
document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);


if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}