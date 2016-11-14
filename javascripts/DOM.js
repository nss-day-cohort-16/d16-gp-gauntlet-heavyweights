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
$(".playerClass").click(function(){
	if(event.target.id === "cop"){
		gamegen.Gauntlet.setPlayerClass(cop);
	}else if(event.target.id === "criminal"){
		gamegen.Gauntlet.setPlayerClass(criminal);
	}
});

 // Gauntlet.playerAttack();

 $("#attack").click(function(e){
 	console.log("clicked Attack");
 	
 
 	
 });

$(document).ready(function() {


 let copInfo = $("#copInfo");
 let criminalInfo = $("#criminalInfo");


 $("#attack").on("click", function(e) {
 	gamegen.Gauntlet.setPlayerClass();
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