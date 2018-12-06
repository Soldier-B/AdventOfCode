function aoc_6() {
	var points = Array.from(arguments).map(Point),
		map = Array(points.length).fill(0),
		minX, minY,
		maxX, maxY,
		under10000 = 0;

	(x => {
		minX = Math.min.apply(0, x);
		maxX = Math.max.apply(0, x);
	})(points.map(p => p.x));

	(y => {
		minY = Math.min.apply(0, y);
		maxY = Math.max.apply(0, y);
	})(points.map(p => p.y));

	for (var y = minY; y < maxY; y++) {
		for (var x = minX; x < maxX; x++) {
			// get distance from all points
			var distances = points.map((p, i) => {
				return {
					id: i,
					distance: Math.abs(x - p.x) + Math.abs(y - p.y)
				};
			});
			// if aggregate distance to all points < 10000, add to under 10k region
			var aggregate = distances.reduce((a, b) => a + b.distance, 0);
			if (aggregate < 10000)
				under10000++;

			if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
				// sort by distance
				distances.sort((a, b) => a.distance - b.distance);
				// if we have 1 min distance, count it
				if (distances[0].distance < distances[1].distance)
					map[distances[0].id]++;
			}
		}
	}

	// part 1
	console.log('part 1: %i', Math.max.apply(0, map));

	// part 2
	console.log('part 2: %i', under10000);
}

function Point(xy) {
	return {
		x: xy[0],
		y: xy[1]
	};
}

aoc_6([61, 90],
	[199, 205],
	[170, 60],
	[235, 312],
	[121, 290],
	[62, 191],
	[289, 130],
	[131, 188],
	[259, 82],
	[177, 97],
	[205, 47],
	[302, 247],
	[94, 355],
	[340, 75],
	[315, 128],
	[337, 351],
	[73, 244],
	[273, 103],
	[306, 239],
	[261, 198],
	[355, 94],
	[322, 69],
	[308, 333],
	[123, 63],
	[218, 44],
	[278, 288],
	[172, 202],
	[286, 172],
	[141, 193],
	[72, 316],
	[84, 121],
	[106, 46],
	[349, 77],
	[358, 66],
	[309, 234],
	[289, 268],
	[173, 154],
	[338, 57],
	[316, 95],
	[300, 279],
	[95, 285],
	[68, 201],
	[77, 117],
	[313, 297],
	[259, 97],
	[270, 318],
	[338, 149],
	[273, 120],
	[229, 262],
	[270, 136]);