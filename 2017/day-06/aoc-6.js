function aoc_6(banks) {
    var history = [],
        key, index, max;
 
    while(history.indexOf(key = banks.join(',')) < 0){        
        history.push(key);

        index = banks.indexOf(max = Math.max.apply(0, banks));        

        banks[index] = 0;
        
        while(max--) banks[index = (index + 1) % banks.length]++;
    }

    // part 1
    console.log(history.length);
    // part 2
    console.log(history.length - history.indexOf(key));
}

aoc_6([2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14]);