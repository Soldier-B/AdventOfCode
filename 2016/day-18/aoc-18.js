function AoC_18_1(row, count){
	return Array(count).fill(0).map(function(){
		var safe = (row.match(/\./g) || []).length;
		row = build('.' + row + '.');
		return safe;
	}).reduce(sum);
	
	function build(map){
		for(var i = 1, r = ''; i < map.length - 1; i++){
			switch(map.substr(i - 1, 3)){
				case '^^.':
				case '.^^':
				case '^..':
				case '..^':
					r+= '^';
					break;
				default:
					r += '.';
					break;
			}
		}
		return r;
	}
	
	function sum(a, b){ return a + b; }
}

//part 1
AoC_18_1('^^^^......^...^..^....^^^.^^^.^.^^^^^^..^...^^...^^^.^^....^..^^^.^.^^...^.^...^^.^^^.^^^^.^^.^..^.^', 40);
// part 2
AoC_18_1('^^^^......^...^..^....^^^.^^^.^.^^^^^^..^...^^...^^^.^^....^..^^^.^.^^...^.^...^^.^^^.^^^^.^^.^..^.^', 400000);