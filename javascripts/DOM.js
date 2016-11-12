"use strict";
let gamegen = require("./gamegen");
let combatants = require("./combatants");
let weapons = require("./weapons");

 // capturePlayerName();
 // setPlayerClass();
 // genOpponents();
 // playerAttack();
 // enemyAttack();
 // checkHealth();//

// function makeNewPlayer(name){
// 	let user = new combatants.Player(name);
// }

 $("#userInput").keyup(function(e) {
 	let code = e.which;
 	if(code === 13) {
		let playerName = document.getElementById("userInput").value;
 		// gamegen.capturePlayerName();
 		console.log("capturePlayerName", playerName); 		
 	}
 });

$(".playerClass").click(function(event){
	if(event.target.id === 'cop'){
		gamegen.setPlayerClass('cop');
	}else if(event.target.id === 'criminal'){
		gamegen.setPlayerClass('criminal');
	}
});

 // $("#cop").click(function(e){
 // 	console.log("clicked");
 // 	gamegen.setPlayerClass(e);
 // 	gamegen.genOpponents();
 // });

 // $("#criminal").click(function(e){
 // 	console.log("clicked criminal");
 // 	gamegen.setPlayerClass(e);
 // });

 $("#attack").click(function(e){
 	console.log("clicked Attack");
 	combatants.Cop.setWeapons();
 	combatants.Criminal.setWeapons();
 	gamegen.playerAttack();
 	gamegen.enemyAttack();
 	gamegen.checkHealth();
 });


