function aoc_9(p, m){
	var players = Array(p).fill(0),
		marbles = [0],
		next = 1;
		
	players.current = 0;
	marbles.current = 0;
		
	while(next <= m){
		var i = ((marbles.current + 1) % marbles.length) + 1;
		
		if(next % 23)
			marbles.splice(i, 0, next);
		else{
			i = marbles.current - 7;
			if(i < 0) i += marbles.length;
			players[players.current] += next + marbles.splice(i, 1)[0];
		}
		
		marbles.current = i;
		next++;
		players.current = ++players.current % players.length;
	}
	
	console.log(Math.max.apply(0, players));
}

// 486 players; last marble is worth 70833 points

// part 1
aoc_9(486, 70833);

// part 2
aoc_9(486, 7083300);
