function aoc_11_2(gsn) {
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

    for (var y = 0; y < 300; y++)
        for (var x = 0; x < 300; x++) {
            var total = table[x + y * 300];

            if (!best || total > best.total)
                best = { x: x + 1, y: y + 1, total: total, size: 1 };

            for (var s = 1; s < 300; s++) {
                if (x + s > 299) break;

                for (var y1 = y; y1 <= y + s; y1++)
                    total += table[(x + s) + y1 * 300];

                for (var x1 = x; x1 < x + s; x1++)
                    total += table[x1 + (y + s) * 300];

                if (total > best.total)
                    best = { x: x + 1, y: y + 1, total: total, size: s + 1 };
            }
        }

    console.log('%i,%i,%i', best.x, best.y, best.size);
}

aoc_11_2(7400);
