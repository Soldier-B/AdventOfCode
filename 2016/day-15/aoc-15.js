function AoC_15(){
	var gears = Array.from(arguments), i = 0;

	while(gears.some(notZero)) i++;
	
	return i;
	
	function notZero(gear, index){
		return (gear[1] + index + i + 1) % gear[0];
	}
}

// part 1
AoC_15([13, 10], [17, 15], [19, 17], [7, 1], [5, 0], [3, 1]);
// part 2
AoC_15([13, 10], [17, 15], [19, 17], [7, 1], [5, 0], [3, 1], [11, 0]);