function aoc_10_2(lengths){
    var list = [...Array(256).keys()],
        i = 0,
        round = 0;

    while(round < 64){
        lengths.forEach(function(length, step){
            write(i, read(i, length).reverse());
            i = (i + length + (round * lengths.length) + step) % list.length;
        });
        round++;
    }

    for(i = 0; i < 16; i++)
        list.push(list.splice(0, 16).reduce(function(a, b){ return a ^ b; }));

    return list.map(hex).join('');

    function read(i, count){
        return [...Array(count)]
        .map(function(_, j){
            return list[(j + i) % list.length];
        });
    }

    function write(i, a){
        while(a.length)
            list[i++ % list.length] = a.shift();
    }

    function hex(n){
        return ('0' + n.toString(16)).slice(-2);
    }
}

aoc_10_2(
    '106,16,254,226,55,2,1,166,177,247,93,0,255,228,60,36'
        .split('')
        .map(function(a){
            return a.charCodeAt(0);
        })
        .concat([17,31,73,47,23])
);

