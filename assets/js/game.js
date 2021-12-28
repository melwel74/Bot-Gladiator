// var playerName = window.prompt("What's your robot name?");
// console.log(playerName)
// console.log("this logs a string, good for leaving yourself a message");
// console.log(10 + 10);
// console.log("Our robot's name is" + playerName);

// function fight() {
//     window.alert("the fight has begun");
// }
// fight()
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Bot Gladiators!");
};
fight();

// Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
enemyHealth = enemyHealth - playerAttack
// Log a resulting message to the console so we know that it worked
console.log(
playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
);
// Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
// Log a resulting message to the console so we know that it worked