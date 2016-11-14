"use strict";
let gamegen = require("./gamegen");
let combatants = require("./combatants");
let weapons = require("./weapons");



 $("#userInput").keyup(function(e) {
 	let code = e.which;
 	if(code === 13) {
		let playerName = document.getElementById("userInput").value;
 		
 		console.log("capturePlayerName", playerName); 		
 	}
 });

let cop = document.getElementById('cop');
let criminal = document.getElementById('criminal');

$(".playerClass").click(function(player1){

	gamegen.Gauntlet.setPlayerClass(event);
	gamegen.Gauntlet.setEnemyClass(event);

	if(event.target.id === "cop"){
	 player1 = gamegen.Gauntlet.setPlayerClass(cop);
	}else if(event.target.id === "criminal"){
	 player1 = gamegen.Gauntlet.setPlayerClass(criminal);
	}
	console.log("player1", player1);
});

 // Gauntlet.playerAttack();

 $("#attack").click(function(player1, enemy1){
 	console.log("player1 and enemy1", player1, enemy1 );
 	
 	
 	gamegen.Gauntlet.playerAttack(player1, enemy1);
 	gamegen.Gauntlet.enemyAttack(player1, enemy1);

 	
 });

$(document).ready(function() {


 let copInfo = $("#copInfo");
 let criminalInfo = $("#criminalInfo");

 	// gamegen.Gauntlet.setPlayerClass();

 $("#attack").on("click", function(e) {
 	gamegen.Gauntlet.playerAttack();
 	copInfo.html(
 		`<p>health: ${combatants.Cop.health}</p>
 		 <img src = "">`);
 	criminalInfo.html(
 		 `<p>health: ${combatants.Criminal.health}</p>
 		  <img src = "">`);

 	let checkHealth = function(newPlayerHealth, newEnemyHealth){
	if(newPlayerHealth === 0){
		console.log(`${combatants.Player.name} is dead!`);
	}else if(newEnemyHealth === 0){
		console.log(`...is dead!`);
	}else{
		console.log('Keep fighting!!!!');
	}
};


 });

});

let listDom = document.getElementById("copInfo");
listDom.innerHTML = `<p>health: $${gamegen.Gauntlet.setPlayerClass}${gamegen.Gauntlet.playerAttack}</p>`;