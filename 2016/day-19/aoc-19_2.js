function AoC_19_2(count){
	var elves = Array(count).fill(0).map(function(_, i){ return ++i; });
	while(elves.length > 1){
		elves.splice(elves.length >> 1, 1);
		elves.push(elves.shift());
	}
	
	return elves[0];
}

AoC_19_2(3004953);