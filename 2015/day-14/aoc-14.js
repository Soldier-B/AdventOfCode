function aoc_14(desc){
	var deer = desc.reduce(collectDeer, {}),
		names = [...Object.keys(deer)],
		max = 0,
		points = [...names].map(function(){ return 0; });
	
	for(var i = 0; i < 2503; i++){
		names.forEach(function(name){
			var target = deer[name];
			if(i % (target.burst + target.rest) < target.burst)
				target.dist += target.speed;
			max = Math.max(max, target.dist);
		});
		
		names.forEach(function(name, i){
			if(deer[name].dist == max)
				points[i]++;
		});
	}
	
	// part 1
	console.log(max);
	// part 2
	console.log(Math.max(...points));
	
	function collectDeer(deer, def){
		def = def.split(' ');
		return deer[def[0]] = {
				speed: +def[3],
				burst: +def[6],
				rest: +def[13],
				dist: 0
			}, deer;
	}
}

aoc_14([
	'Vixen can fly 8 km/s for 8 seconds, but then must rest for 53 seconds.',
	'Blitzen can fly 13 km/s for 4 seconds, but then must rest for 49 seconds.',
	'Rudolph can fly 20 km/s for 7 seconds, but then must rest for 132 seconds.',
	'Cupid can fly 12 km/s for 4 seconds, but then must rest for 43 seconds.',
	'Donner can fly 9 km/s for 5 seconds, but then must rest for 38 seconds.',
	'Dasher can fly 10 km/s for 4 seconds, but then must rest for 37 seconds.',
	'Comet can fly 3 km/s for 37 seconds, but then must rest for 76 seconds.',
	'Prancer can fly 9 km/s for 12 seconds, but then must rest for 97 seconds.',
	'Dancer can fly 37 km/s for 1 seconds, but then must rest for 36 seconds.'
]);
