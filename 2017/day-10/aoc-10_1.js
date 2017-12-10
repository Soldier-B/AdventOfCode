function aoc_10_1(lengths){
    var list = [...Array(256).keys()],
        i = 0;

    lengths.forEach(function(length, step){
        write(i, read(i, length).reverse());
        i = (i + length + step) % list.length;
    });

    return list[0] * list[1];

    function read(i, count){
        return [...Array(count)]
            .map(function(_, j){
                return list[(j + i) % list.length];
            });
    }

    function write(i, a){
        while(a.length) list[i++ % list.length] = a.shift();
    }
}

aoc_10_1([106,16,254,226,55,2,1,166,177,247,93,0,255,228,60,36]);