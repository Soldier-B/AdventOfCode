function aoc_15(){
	var ing = arguments[0].map(parse),
		part1 = 0,
		part2 = 0;
		
	for(var a = 0; a <= 100; a++)
		for(var b = 0; b <= 100 - a; b++)
			for(var c = 0; c <= 100 - a - b; c++){
				var d = 100 - a - b - c;
				
				if (a + b + c + d != 100) continue;
				
				score(a, b, c, d);
			}
	
	console.log(part1);
	
	console.log(part2);
	
	function parse(a){
		a = a.replace(/[:,]/g, '').split(' ');
		return [ +a[2], +a[4], +a[6], +a[8], +a[10] ];
	}
	
	function score(a, b, c, d){
		var factors = [0, 1, 2, 3, 4].map(function(prop){
				return Math.max(0, (ing[0][prop] * a) + (ing[1][prop] * b) + (ing[2][prop] * c) + (ing[3][prop] * d));
			}),
			total = factors.slice(0, 4).reduce(function(a, b){ return a * b; });
		
		part1 = Math.max(part1, total);
		if(factors[4] == 500) part2 = Math.max(part2, total);
	}
}

aoc_15([
	'Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3',
	'Butterscotch: capacity 0, durability 5, flavor -3, texture 0, calories 3',
	'Chocolate: capacity 0, durability 0, flavor 5, texture -1, calories 8',
	'Candy: capacity 0, durability -1, flavor 0, texture 5, calories 8'
]);
