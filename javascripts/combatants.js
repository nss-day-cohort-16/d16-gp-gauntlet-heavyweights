
"use strict";



let Player = function(name){
	this.name = name;
	this.class = null;
	this.health = ' ';
	this.weapons = [];
	this.damage = ' ';
	this.currentWeapon = [];
};

Player.prototype.setWeapons = function(weapons){
	console.log('setWeapons is running');
	this.weapons = weapons ? this.weapons.concat(weapons) : this.weapons;
	console.log("weapon", weapons );
};

Player.prototype.getCurrentWeapon = function(weapon){
	let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
	console.log("currentWeapon", currentWeapon);
	return currentWeapon;
};


let Cop = function(){
	this.class = "cop";
	this.health = 20;
	this.setWeapons(["shotgun", " nightstick"]);
	this.getCurrentWeapon();
	console.log('new Cop', this);
};
Cop.prototype = new Player();

let Criminal = function(){
	this.class = "criminal";
	this.health = 20;
	this.setWeapons(["uzi", " butterfly_knife"]);
	this.getCurrentWeapon();
	console.log('new Criminal', this);

};
Criminal.prototype = new Player();


 module.exports = { Player, Cop, Criminal };