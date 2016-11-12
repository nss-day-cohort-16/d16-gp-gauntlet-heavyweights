
"use strict";

let Game = function(){
	// this.player.criminal = null;
	// this.player.cop = null;
};

let Player = function(name){
	this.name = name;
	this.class = null;
	this.health = null;
	this.weapons = '';
	this.damage = null;
	this.currentWeapon = null;
};

Player.prototype.setWeapons = function(weapons){
	console.log('setWeapons is running');
	this.weapons = weapons ? this.weapons.concat(weapons, ' ') : this.weapons;

};

Player.prototype.getCurrentWeapon = function(){
	let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
	return currentWeapon;
};

let Cop = function(){
	this.class = "cop";
	this.health = 20;
	this.setWeapons(["shotgun", "nightstick"]);
	console.log('new Cop', this);
};
Cop.prototype = new Player();

let Criminal = function(){
	this.class = "criminal";
	this.health = 20;
	this.setWeapons(["uzi", "butterfly_knife"]);
	console.log('new Criminal', this);

};
Criminal.prototype = new Player();


 module.exports = { Player, Cop, Criminal };