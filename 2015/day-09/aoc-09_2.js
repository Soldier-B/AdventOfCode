function aoc_9_2(routes){
	var cities = [],
		lengths;
	
	routes = routes.map(function(route){
		var match = route.match(/(\w+) to (\w+) = (\d+)/);
		
		if(cities.indexOf(match[1]) < 0) cities.push(match[1]);
		if(cities.indexOf(match[2]) < 0) cities.push(match[2]);
		
		return {
			route: [match[1], match[2]].sort(),
			distance: +match[3]
		};
	});
	
	lengths = cities.map(function(start, i){
		var traveled = [start],
			distance = 0;
			
		while(traveled.length < cities.length){
			var found = routes.filter(function(route){
				var startIndex = route.route.indexOf(start);
				
				return startIndex >= 0 && traveled.indexOf(route.route[1 - startIndex]) < 0;
			}).sort(function(a, b){
				return b.distance - a.distance;
			})[0];
			
			distance += found.distance;
			
			found = found.route[found.route[0] == start ? 1 : 0];
			
			traveled.push(start = found);
		}
		
		return distance;
	});
	
	
	return Math.max.apply(0, lengths);
}

aoc_9_2([
	'Tristram to AlphaCentauri = 34',
	'Tristram to Snowdin = 100',
	'Tristram to Tambi = 63',
	'Tristram to Faerun = 108',
	'Tristram to Norrath = 111',
	'Tristram to Straylight = 89',
	'Tristram to Arbre = 132',
	'AlphaCentauri to Snowdin = 4',
	'AlphaCentauri to Tambi = 79',
	'AlphaCentauri to Faerun = 44',
	'AlphaCentauri to Norrath = 147',
	'AlphaCentauri to Straylight = 133',
	'AlphaCentauri to Arbre = 74',
	'Snowdin to Tambi = 105',
	'Snowdin to Faerun = 95',
	'Snowdin to Norrath = 48',
	'Snowdin to Straylight = 88',
	'Snowdin to Arbre = 7',
	'Tambi to Faerun = 68',
	'Tambi to Norrath = 134',
	'Tambi to Straylight = 107',
	'Tambi to Arbre = 40',
	'Faerun to Norrath = 11',
	'Faerun to Straylight = 66',
	'Faerun to Arbre = 144',
	'Norrath to Straylight = 115',
	'Norrath to Arbre = 135',
	'Straylight to Arbre = 127'
]);
