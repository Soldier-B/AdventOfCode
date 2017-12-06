function aoc_10(input, count){
	for(var i = 0; i < count; i++)
		input = input.replace(/(\d)\1*/g, function(a, b){
			return '' + a.length + b;
		});
	return input.length;
}

// part 1
aoc_10('1113122113', 40);
// part 2
aoc_10('1113122113', 50);
