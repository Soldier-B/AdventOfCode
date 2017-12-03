function aoc_3_1(n){
	var x = 0,
		y = 0,
		d = 0,
		add = 1,
		addCnt = 0;

	for(var i = 1; i < n; i++){
		x += d % 2 ? 0 : 1 - d;
		y += d % 2 ? 2 - d : 0;
		
		addCnt++;
		
		if(addCnt == add){
			addCnt = 0;
			d = ++d % 4;
			if(d % 2 == 0)
				add++;
		}
	}
	
	return Math.abs(x) + Math.abs(y);
}

aoc_3_1(289326);