//Author: Michael Giroux 2/13/21

var playerLvl = 25;
var playerTitle;

if (playerLvl < 10){
    playerTitle = "beginner";
}
else if (playerLvl < 20){
    playerTitle = "low";
}
else if (playerLvl < 30){
    playerTitle = "medium";
}
else if (playerLvl < 40){
    playerTitle = "high";
}
else {
    playerTitle = "expert";
}

console.log("With a level of " + playerLvl + " you are " + playerTitle + ".");