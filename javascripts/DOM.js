"use strict";
let gamegen = require("./gamegen");
let combatants = require("./combatants");

 // capturePlayerName();
 // setPlayerClass();
 // genOpponents();
 // playerAttack();
 // enemyAttack();
 // checkHealth();

 
 $("#userInput").keyup(function(e) { 
 	let code = e.which;

 	if(code === 13) {
 		gamegen.capturePlayerName();

 		// console.log("capturePlayerName", playerName );

 	}

 	
 });