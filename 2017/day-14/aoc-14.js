function aoc_14(inp){
	var rows = [],
		count = 0;
	
	for(var i = 0; i < 128; i++){
		var hash = knot((inp + '-' + i).split('').map(function(c){ return c.charCodeAt(0); }));
		rows[i] = [];
		hash.split('').forEach(function(x){
			var n = parseInt(x, 16),
				b = ('000' + n.toString(2)).slice(-4);
			rows[i].push(...b.split('').map(Number));
			count += b.replace(/0/g, '').length;
		});
	}
	
	var groups = 0,
		j = 0,
		k = 128 * 128;
		
	while(j < k){
		if(rows[j >> 7][j % 128] > 0){
			groups++;
			erase(j % 128, j >> 7);
		}
		j++;
	}
	
	
	// part 1
	console.log(count);
	
	// part 2
	console.log(groups);
	
	function knot(lengths){
		var list = [...Array(256).keys()],
			i = 0,
			round = 0;
			
		lengths = lengths.concat([17,31,73,47,23]);

		while(round < 64){
			lengths.forEach(function(length, step){
				write(i, read(i, length).reverse());
				i = (i + length + (round * lengths.length) + step) % list.length;
			});
			round++;
		}

		for(i = 0; i < 16; i++)
			list.push(list.splice(0, 16).reduce(function(a, b){ return a ^ b; }));

		return list.map(hex).join('');

		function read(i, count){
			return [...Array(count)]
			.map(function(_, j){
				return list[(j + i) % list.length];
			});
		}

		function write(i, a){
			while(a.length)
				list[i++ % list.length] = a.shift();
		}

		function hex(n){
			return ('0' + n.toString(16)).slice(-2);
		}
	}
	
	function erase(x, y){
		if(rows[y][x] > 0){
			rows[y][x] = 0;
			if(x > 0) erase(x - 1, y);
			if(x < 127) erase(x + 1, y);
			if(y > 0) erase(x, y - 1);
			if(y < 127) erase(x, y + 1);
		}
	}
}

aoc_14('ugkiagan');
