function aoc_15(a, b){
	var count = 0,
		aa = a,
		bb = b,
		i;
		
	for(i = 0; i < 40000000; i++){
		aa = (aa * 16807) % 2147483647;
		bb = (bb * 48271) % 2147483647;
		if((aa & 0xffff) == (bb & 0xffff))
			count++;
	}
	
	// part 1
	console.log(count);
	
	aa = a;
	bb = b;
	count = 0;
	
	for(i = 0; i < 5000000; i++){
		do { aa = (aa * 16807) % 2147483647; } while(aa % 4);
		do { bb = (bb * 48271) % 2147483647; } while(bb % 8)
		if((aa & 0xffff) == (bb & 0xffff))
			count++;
	}
	
	// part 2
	console.log(count);
}

aoc_15(512, 191);
