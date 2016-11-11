"use strict";

let Player = function() {
	this.name = null;
	this.class = null;
	this.health = null;
	this.weapons = null;
	this.damage = null;
	this.currentWeapon = null;
};

Player.prototype.setWeapons = function(items){
	let newWeapons = this.weapons.concat(items);
	return newWeapons;
};

Player.prototype.getCurrentWeapon = function(){
	let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
	return currentWeapon;
};

let Cop = function(){
	this.class = "cop";
	this.health = 20;
	this.weapons = Cop.setWeapons(["shotgun", "nightstick"]);
};
Cop.prototype = new Player();

let Criminal = function(){
	this.class = "criminal";
	this.health = 20;
	this.weapons = Criminal.setWeapons(["uzi", "butterfly_knive"]);
};
Criminal.prototype = new Player();

let weapons = function(){
	this.damage = null;
};

let shotgun = function(){
	this.damage = 5;
};

let nightstick = function(){
	this.damage = 3;
};


let uzi = function(){
	this.damage = 6;
};

let butterfly_knive = function(){
	this.damage = 2;
};

 module.exports = { Cop, Criminal , weapons, shotgun, nightstick, uzi, butterfly_knive};

