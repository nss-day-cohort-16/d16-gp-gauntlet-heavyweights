'use strict';

let combatants = require('./combatants');

let newPlayerHealth, newEnemyHealth;


function setPlayerClass(btnId){
	console.log('setPlayerClass is running.');
	if(event.target.id==='cop'){
		new combatants.Cop();
	}else if(event.target.id === 'criminal'){
		new combatants.Criminal();
	}
}

let genOpponent = function(){
	console.log('generateOpponent is running.');
	if(combatants.Cop === true){
		let enemy = combatants.Criminal;
	}else{
		let enemy = combatants.Cop;
	}

	// random name generator
};



let playerAttack = function(player){
	console.log('playerAttack is running.');
	this.currentWeapon = combatants.Player.getCurrentWeapon();
	newEnemyHealth = combatants.enemy.health - combatants.player.currentWeapon.damage;
	console.log('newEnemyHealth', newEnemyHealth);
	checkHealth(newEnemyHealth);
};

let enemyAttack = function(enemy){
	console.log('enemyAttack is running.');
	this.currentWeapon = combatants.Player.getCurrentWeapon();
	newPlayerHealth = combatants.player.health - combatants.enemy.currentWeapon.damage;
	console.log('newPlayerHealth', newPlayerHealth);
	checkHealth(newPlayerHealth);
};

let checkHealth = function(newPlayerHealth, newEnemyHealth){
	if(newPlayerHealth === 0){
		console.log(`${combatants.Player.name} is dead!`);
	}else if(newEnemyHealth === 0){
		console.log(`...is dead!`);
	}else{
		console.log('Keep fighting!!!!');
	}
};

module.exports = { setPlayerClass, genOpponent, playerAttack, enemyAttack, checkHealth };
