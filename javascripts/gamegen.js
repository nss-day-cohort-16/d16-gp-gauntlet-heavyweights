'use strict';

let combatants = require('./combatants');

let newPlayerHealth, newEnemyHealth;

let capturePlayerName = function(){
	let playerName = document.getElementById("userInput").value;
	console.log('playerName', playerName);
};

let setPlayerClass = function(){
	console.log('setPlayerClass is running.');
	if(event.target.id==='cop'){
		combatants.Cop();
	}else if(event.target.id === 'criminal'){
		combatants.Criminal();
	}
};

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
	// return newEnemyHealth;
	checkHealth(newEnemyHealth);
};

let enemyAttack = function(enemy){
	console.log('enemyAttack is running.');
	this.currentWeapon = combatants.Player.getCurrentWeapon();
	newPlayerHealth = combatants.player.health - combatants.enemy.currentWeapon.damage;
	// return newPlayerHealth;
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

