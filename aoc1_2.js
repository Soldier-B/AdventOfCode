function AoC_1_2(directions){
	var a = 0, x = 0, y = 0, cache = { '0 0': void 0 };
	directions.split(', ').some(function(direction){
		var mult = direction[0] == 'L' ? -1 : 1,
			steps = +direction.slice(1), key;
		a += Math.PI * mult / 2;
		
		while(steps--){
			x += Math.round(Math.cos(a));
			y += Math.round(Math.sin(a));
			key = x + ' ' + y;			
			if(key in cache) return true;
			cache[key] = void 0;	
		}
		
		return false;
	});
	return Math.abs(x) + Math.abs(y);
}

// AoC_1_2('L3, R2, L5, R1, L1, L2, L2, R1, R5, R1, L1, L2, R2, R4, L4, L3, L3, R5, L1, R3, L5, L2, R4, L5, R4, R2, L2, L1, R1, L3, L3, R2, R1, L4, L1, L1, R4, R5, R1, L2, L1, R188, R4, L3, R54, L4, R4, R74, R2, L4, R185, R1, R3, R5, L2, L3, R1, L1, L3, R3, R2, L3, L4, R1, L3, L5, L2, R2, L1, R2, R1, L4, R5, R4, L5, L5, L4, R5, R4, L5, L3, R4, R1, L5, L4, L3, R5, L5, L2, L4, R4, R4, R2, L1, L3, L2, R5, R4, L5, R1, R2, R5, L2, R4, R5, L2, L3, R3, L4, R3, L2, R1, R4, L5, R1, L5, L3, R4, L2, L2, L5, L5, R5, R2, L5, R1, L3, L2, L2, R3, L3, L4, R2, R3, L1, R2, L5, L3, R4, L4, R4, R3, L3, R1, L3, R5, L5, R1, R5, R3, L1');
