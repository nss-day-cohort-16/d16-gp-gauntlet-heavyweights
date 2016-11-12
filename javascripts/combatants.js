
"use strict";

let Player = function() {
	this.name = null;
	this.class = null;
	this.health = null;
	this.weapons = null;
	this.damage = null;
	this.currentWeapon = null;
};

Player.prototype.setWeapons = function(weapons){
	this.weapons = weapons? this.weapons.concat(weapons) : this.weapons;

};

Player.prototype.getCurrentWeapon = function(){
	let currentWeapon = this.weapons[Math.floor(Math.random() * (this.weapons.length - 1))];
	return currentWeapon;
};

let Cop = function(){
	this.class = "cop";
	this.health = 20;
	this.setWeapons(["shotgun", "nightstick"]);
};
Cop.prototype = new Player();

let Criminal = function(){
	this.class = "criminal";
	this.health = 20;
	this.setWeapons(["uzi", "butterfly_knive"]);
};
Criminal.prototype = new Player();

let weapons = function(){
	this.damage = null;
};

let shotgun = function(){
	this.damage = 5;
};
	shotgun.prototype = new weapons();

let nightstick = function(){
	this.damage = 3;
};
  nightstick.prototype = new weapons();

let uzi = function(){
	this.damage = 6;
};
	uzi.prototype = new weapons();
let butterfly_knive = function(){
	this.damage = 2;
};
butterfly_knive.prototype = new weapons();



 module.exports = { Cop,Criminal, weapons, shotgun, nightstick, uzi, butterfly_knive};