function aoc_13(){
	var firewall = arguments[0].reduce(function(fw, layer){
			layer = layer.split(': ');
			fw[+layer[0]] = +layer[1];
			return fw;
		}, []),
		part = 1,
		severity = 0,
		delay = 0;
	
	for(var i = 0; i < firewall.length; i++){
		var range = firewall[i],
			step = i + 1 + delay;
			
		if(range !== undefined && step % (range * 2 - 2) == 1){
			if(part == 1)
				severity += i * range;
			else{
				i = -1;
				delay++;
			}
		}
		
		if(step == firewall.length){
			part = 2;
			i = -1; 
			delay++;
		}
	}
	
	// part 1
	console.log(severity);
	// part 2
	console.log(delay);
}

aoc_13([
	'0: 4',
	'1: 2',
	'2: 3',
	'4: 4',
	'6: 8',
	'8: 5',
	'10: 8',
	'12: 6',
	'14: 6',
	'16: 8',
	'18: 6',
	'20: 6',
	'22: 12',
	'24: 12',
	'26: 10',
	'28: 8',
	'30: 12',
	'32: 8',
	'34: 12',
	'36: 9',
	'38: 12',
	'40: 8',
	'42: 12',
	'44: 17',
	'46: 14',
	'48: 12',
	'50: 10',
	'52: 20',
	'54: 12',
	'56: 14',
	'58: 14',
	'60: 14',
	'62: 12',
	'64: 14',
	'66: 14',
	'68: 14',
	'70: 14',
	'72: 12',
	'74: 14',
	'76: 14',
	'80: 14',
	'84: 18',
	'88: 14'
]);
