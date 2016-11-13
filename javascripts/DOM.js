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

$(".playerClass").click(function(event){
	if(event.target.id === 'cop'){
		Gauntlet.setPlayerClass('cop');
	}else if(event.target.id === 'criminal'){
		Gauntlet.setPlayerClass('criminal');
	}
});

 
 
 $("#attack").click(function(e){
 	console.log("clicked Attack");
 	
 
 	
 });

