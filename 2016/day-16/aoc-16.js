function AoC_16(data, size){
	data = data.split('').map(Number);
	// dragon number inversion thing...
	while(data.length < size){
		data.push(0);
		for(var len = data.length - 1; len > 0; len--)
			data.push(1 - data[len - 1]);
	}
	// trim extras...
	while(data.length > size)
		data.pop();
	// checksum it...
	while(data.length % 2 == 0){
		for(var i = 0, j = data.length >> 1; i < data.length; i += 2)
			data[i >> 1] = 1 - Math.abs(data[i] - data[i + 1]);
		while(j--)
			data.pop();
	}
	// gtfo...
	return data.join('');
}

// part 1 - 0ms
AoC_16('10011111011011001', 272);
// part 2 - 4348ms
AoC_16('10011111011011001', 35651584);