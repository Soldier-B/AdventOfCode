function aoc_17(step){
	var buffer = [0],
		pos = 0,
		after0;
		
	for(var i = 1; i < 50000000; i++){
		pos = (pos + step) % i;
		
		if(pos++ == 0)
			after0 = i;
		
		if(i < 2018){
			buffer.splice(pos, 0, i);
			if(i == 2017){
				// part 1
				console.log(buffer[pos + 1]);
				buffer = null;
			}
		}
	}
	
	// part 2
	console.log(after0);
}

aoc_17(304);
