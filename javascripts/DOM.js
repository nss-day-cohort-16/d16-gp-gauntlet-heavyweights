"use strict";
let gamegen = require("./gamegen");
let combatants = require("./combatants");

 // capturePlayerName();
 // setPlayerClass();
 // genOpponents();
 // playerAttack();
 // enemyAttack();
 // checkHealth();//


 $("#userInput").keyup(function(e) {
 	let code = e.which;
 	if(code === 13) {
 		gamegen.capturePlayerName();
 		// console.log("capturePlayerName", playerName );
 	}
 });

 $("#cop").click(function(e){
 	console.log("clicked");
 	gamegen.setPlayerClass(e);
 	gamegen.genOpponents();
 });

 $("#criminal").click(function(e){
 	console.log("clicked criminal");
 	gamegen.setPlayerClass(e);
 });

 $("#attack").click(function(e){
 	console.log("clicked Attack");
 	gamegen.playerAttack();
 	gamegen.enemyAttack();
 	gamegen.checkHealth();
 });


