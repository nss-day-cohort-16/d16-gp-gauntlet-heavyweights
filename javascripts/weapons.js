'use strict';

let Weapon = function(){
	this.name = 'default weapon';
	this.damage = null;
};

let Shotgun = function(){
	this.name = 'shotgun';
	this.damage = 5;
};
Shotgun.prototype = new Weapon();

let Nightstick = function(){
	this.name = 'nightstick';
	this.damage = 3;
};
Nightstick.prototype = new Weapon();

let Uzi = function(){
	this.name = 'uzi';
	this.damage = 6;
};
Uzi.prototype = new Weapon();

let butterflyKnife = function(){
	this.name = 'butterfly knife';
	this.damage = 2;
};
butterflyKnife.prototype = new Weapon();


module.exports = { Weapon, Shotgun, Nightstick, Uzi, butterflyKnife };