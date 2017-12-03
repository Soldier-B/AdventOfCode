function aoc_3_2(n){
	var x = 0,
		y = 0,
		d = 0,
		add = 1,
		addCnt = 0,
		grid = { '0,0': 1 };

	for(var i = 1; ; i++){
		x += d % 2 ? 0 : 1 - d;
		y += d % 2 ? 2 - d : 0;
		
		grid[coord(x, y)] = getSum(x, y);
		
		if(grid[coord(x, y)] > n)
			return grid[coord(x, y)];
		
		addCnt++;
		
		if(addCnt == add){
			addCnt = 0;
			d = ++d % 4;
			if(d % 2 == 0)
				add++;
		}
	}
	
	function getSum(x,y){
		var sum = 0;
		
		sum += grid[coord(x - 1, y + 1)] || 0;
		sum += grid[coord(x    , y + 1)] || 0;
		sum += grid[coord(x + 1, y + 1)] || 0;
		sum += grid[coord(x - 1, y    )] || 0;
		sum += grid[coord(x + 1, y    )] || 0;
		sum += grid[coord(x - 1, y - 1)] || 0;
		sum += grid[coord(x    , y - 1)] || 0;
		sum += grid[coord(x + 1, y - 1)] || 0;
		
		return sum;
	}
	
	function coord(x, y){
		return x + ',' + y;
	}
	
	return Math.abs(x) + Math.abs(y);
}

aoc_3_2(289326);