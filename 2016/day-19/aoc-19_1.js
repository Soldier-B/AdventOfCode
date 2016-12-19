function AoC_19_1(count){
	var elves = Array(count).fill(0).map(function(_, i){ return ++i; });
	
	while(elves.length > 1){
		var len = elves.length;
		elves = elves.filter(function(_, i){ return i % 2 == 0; });
		if(len % 2 == 1) elves.unshift(elves.pop());
	}
	
	return elves[0];
}

AoC_19_1(3004953);