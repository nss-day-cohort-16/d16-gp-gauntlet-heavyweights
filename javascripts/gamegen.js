
'use strict';
let combatants = require('./combatants');

let newPlayerHealth, newEnemyHealth;
let player, enemy;
let Gauntlet = {};

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
playerAttack: function() {
	let currentWeapon = combatants.Player.getCurrentWeapon();
	newEnemyHealth = combatants.enemy.health - combatants.player.currentWeapon.damage;
	
	currentWeapon = combatants.Enemy.getCurrentWeapon();
	newPlayerHealth = combatants.player.health - combatants.enemy.currentWeapon.damage;
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
console.log("Gauntlet.playerAttack", Gauntlet.playerAttack() );
console.log("Gauntlet",Gauntlet );


module.exports = { Gauntlet };
