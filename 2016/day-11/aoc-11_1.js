/*
1F: thulium generator, thulium-compatible microchip, plutonium generator, strontium generator
2F: plutonium-compatible microchip, strontium-compatible microchip
3F: promethium generator, promethium-compatible microchip, ruthenium generator, ruthenium-compatible microchip
The fourth floor contains nothing relevant.
*/
function AoC_11_1(){
	var floors = 
}

function Chip(type){
	if(!(this instanceof Chip)) return new Chip(type);
	Object.defineProperty(this, 'type', { value: type });
}

function Generator(type){
	if(!(this instanceof Generator)) return new Generator(type);
	Object.defineProperty(this, 'type', { value: type });
}

Chip.prototype.toString = Generator.prototype.toString = function(){
	return this.type + ' ' + this.constructor.name;
}