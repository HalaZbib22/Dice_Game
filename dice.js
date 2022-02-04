if (
  window.performance.navigation.type ==
  window.performance.navigation.TYPE_RELOAD
) {
  var header = document.querySelector("h1");
  var randomP1 = Math.floor(Math.random() * 6) + 1; // between 1-6
  var randomP2 = Math.floor(Math.random() * 6) + 1; // between 1-6

  var image1 = document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomP1 + ".png");
  console.log(randomP1);
  var image2 = document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomP2 + ".png");
  console.log(randomP2);

  if (randomP1 > randomP2) {
    header.innerHTML = "Player 1 wins!";
  } else if (randomP1 < randomP2) {
    header.innerHTML = "Player 2 wins!";
  } else {
    header.innerHTML = "Draw!";
  }
}

// if(randomP1 > randomP2){
//     header.innerHTML += "Player 1 wins!";
// }else if(randomP1 < randomP2){
//     header.innerHTML += "<br/>Player 2 wins!";
// }else{
//     header.innerHTML += "<br/>Draw!";
// }
