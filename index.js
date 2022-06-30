 
var ranNo1 = Math.floor(Math.random() * 6) + 1;

var ranImgSrc1 = "images/dice" + ranNo1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", ranImgSrc1);

// ranvar##2--------------------------------->

var ranNo2 = Math.floor(Math.random() * 6 ) + 1;

var ranImgSrc2 = "images/dice" + ranNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2);


 
if (ranNo1 > ranNo2) {
    document.querySelector("h1").innerHTML = "🎊🎉 Play 1 Wins!";

}
else if ( ranNo2 > ranNo1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🎉🎊";

}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}