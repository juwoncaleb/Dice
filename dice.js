// IMAGE
var number1 = Math.floor(Math.random()*6) + 1 ;
var random_image = "images/"+"dice"+number1+".png";
$(".img1").attr("src" , random_image)

// IMAGE2
var number2 = Math.floor(Math.random()*6) + 1 ;
var random_image = "images/"+"dice"+number2+".png";
$(".img2").attr("src" , random_image);

// CONDITION
if (number1>number2) {
document.querySelector("h1").innerHTML="player 1 wins";
    
}
else if (number1<number2) {
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{ document.querySelector("h1").innerHTML="draw";
}