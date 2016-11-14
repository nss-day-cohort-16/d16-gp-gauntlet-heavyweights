
'use strict';
let combatants = require('./combatants');
console.log(new combatants.Player());
let x = new combatants.Player();
let y = new combatants.Criminal();
x.setWeapons('uzi');
let currWeapon = x.getCurrentWeapon();
console.log(currWeapon);

let newPlayerHealth, newEnemyHealth;
let player, enemy;
let Gauntlet = {};

combatants.Player.prototype.setWeapons = function(weapons){
    console.log('setWeapons is running');
    this.weapons = weapons ? this.weapons.concat(weapons, ' ') : this.weapons;

};

combatants.Player.prototype.getCurrentWeapon = function(){
    let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
    return currentWeapon;
};

Gauntlet = {
setPlayerClass: function() {
    if(event.target.id==='cop'){
         player = new combatants.Cop();
         enemy = new combatants.Criminal();
    }else if(event.target.id === 'criminal'){
         player = new combatants.Criminal();
         enemy = new combatants.Cop();
    }
},
playerAttack: function(x, y) {
    let currentWeapon = x.getCurrentWeapon();
    newEnemyHealth = y.health - x.currentWeapon.damage;

    currentWeapon = y.getCurrentWeapon();
    newPlayerHealth = x.health - y.currentWeapon.damage;
},
checkHealth: function(newPlayerHealth, newEnemyHealth){
    if(newPlayerHealth === 0){
        console.log(`${combatants.Player.name} is dead!`);
    }else if(newEnemyHealth === 0){
        console.log(`...is dead!`);
    }else{
        console.log('Keep fighting!!!!');
    }

}

};
console.log("Gauntlet.playerAttack", Gauntlet.playerAttack(x, y) );
console.log("Gauntlet",Gauntlet );


module.exports = {Gauntlet};