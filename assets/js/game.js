// Game States
// "WIN" -player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robots health is zero or less


var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", " Amy Android", "Robo Trumble"]; console.log(enemyNames); console.log(enemyNames[0]); console.log(enemyNames[1]); console.log(enemyNames[2]); console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like t fight or run
        var promtFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT or "SKIP to choose');

        // if player picks "skip" confirm then stop the loop
        if (promtFight === "skip" || promtFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney" , playerMoney)
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
        
        // check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            //award player money for winning
            playerMoney = playerMoney + 20;

            // leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.' 
        );
        
        // check players health
        if (playerHealth <= 0) {
            window.alert(playerName + 'has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has' + playerHealth + ' health left.');
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}