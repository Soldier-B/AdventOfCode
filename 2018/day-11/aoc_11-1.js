function aoc_11_1(gsn) {
    var best,
        table = Array(300 * 300)
            .fill(0)
            .map((_, i) => {
                var x = (i % 300) + 1,
                    y = ((i / 300) | 0) + 1,
                    rid = x + 10,
                    pl = (((rid * y) + gsn) * rid).toString();

                return (pl.length > 2 ? +pl.substr(-3, 1) : 0) - 5;
            });

    for (var y = 0; y < 298; y++)
        for (var x = 0; x < 298; x++) {
            var total = table[(x) + (y) * 300] +
                table[(x + 1) + (y) * 300] +
                table[(x + 2) + (y) * 300] +
                table[(x) + (y + 1) * 300] +
                table[(x + 1) + (y + 1) * 300] +
                table[(x + 2) + (y + 1) * 300] +
                table[(x) + (y + 2) * 300] +
                table[(x + 1) + (y + 2) * 300] +
                table[(x + 2) + (y + 2) * 300];

            if (!best || total > best.total)
                best = { x: x + 1, y: y + 1, total: total };
        }

    console.log('%i,%i', best.x, best.y);
}

aoc_11_1(7400);
