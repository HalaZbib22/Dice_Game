var randomP1 = Math.floor(Math.random() * 6) + 1; // between 1-6
var randomP2 = Math.floor(Math.random() * 6) + 1; // between 1-6

var image1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomP1 + ".png");
console.log(randomP1);
var image2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomP2 + ".png");
console.log(randomP2);

if(randomP1 > randomP2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(randomP1 < randomP2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
