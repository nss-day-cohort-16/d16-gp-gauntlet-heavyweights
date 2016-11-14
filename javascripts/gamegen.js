'use strict';
let combatants = require('./combatants');
//onsole.log(new combatants.Player());

let currentWeapon;


let newPlayerHealth, newEnemyHealth;
let Gauntlet = {};

combatants.Player.prototype.setWeapons = function(weapons) {
    // console.log('setWeapons is running');
    this.weapons = weapons ? this.weapons.concat(weapons) : this.weapons;

};

combatants.Player.prototype.getCurrentWeapon = function() {
    let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
    console.log("what is currentWeapon?",currentWeapon );
    return currentWeapon;

};

// let cop = document.getElementById('cop');
// let criminal = document.getElementById('criminal');
let player1;
Gauntlet.setPlayerClass = function() {
    let player;
    if (event.target.id === "cop") {
        player = new combatants.Cop();
    } else if (event.target.id === "criminal") {
        player = new combatants.Criminal();
    }
    console.log("player", player);
    player1 = player;
    return player;
};
let enemy1;
Gauntlet.setEnemyClass = function() {
    let enemy;
    if (event.target.id === "cop") {
        enemy = new combatants.Criminal();
    } else if (event.target.id === "criminal") {
        enemy = new combatants.Cop();
    }
    enemy1 = enemy;
    return enemy;
};
Gauntlet.playerAttack = function(event) {
   
    
    let currentWeapon = player1.getCurrentWeapon();
    newEnemyHealth = enemy1.health - player1.currentWeapon.damage;

    return newEnemyHealth;
 };

Gauntlet.enemyAttack = function(event) {

    currentWeapon = enemy1.getCurrentWeapon(enemy1);
    newPlayerHealth = player1.health - enemy1.currentWeapon.damage;
    console.log("CurrentWeapon", currentWeapon);
    console.log("newPlayerHealth", newPlayerHealth);
    return newPlayerHealth;
};

// Gauntlet.player.checkHealth = function(newPlayerHealth, newEnemyHealth) {
//     if (newPlayerHealth === 0) {
//         console.log(`${combatants.Player.name} is dead!`);
//     } else if (newEnemyHealth === 0) {
//         console.log(`...is dead!`);
//     } else {
//         console.log('Keep fighting!!!!');
//     }



// };

//console.log("Gauntlet.setPlayerClass", Gauntlet.setPlayerClass() );
//console.log("Gauntlet.playerAttack", Gauntlet.playerAttack() );
console.log("Gauntlet", Gauntlet);


module.exports = { Gauntlet };
