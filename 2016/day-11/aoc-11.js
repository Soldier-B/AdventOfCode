/*
The first floor contains a thulium generator, a thulium-compatible microchip, a plutonium generator, and a strontium generator.
The second floor contains a plutonium-compatible microchip and a strontium-compatible microchip.
The third floor contains a promethium generator, a promethium-compatible microchip, a ruthenium generator, and a ruthenium-compatible microchip.
The fourth floor contains nothing relevant.

2 * (item_count - 1) - 1 ... simple math ftw
1st floor has 4 items...to move all items up 1 floor takes 5 moves
bring 2 up, 1 down, 2 up, 1 down, 2 up...5 moves...2 * (4 - 1) - 1 = 5
2nd floor now has 2 + 4 (6) items...6 items up 1 floor take 2 * (6 - 1) - 1 = 9 moves
3rd floor now has 2 + 4 + 4 (10) items...10 items up 1 floor takes 2 * (10 - 1) - 1 = 17 moves
all items now on 4th floor, so 5 + 9 + 17, 31 is total number of moves
part 2 adds extra items on 1st floor...still works though
*/
function AoC_11(){
	var moves = 0;
	return Array.from(arguments).reduce(function(total, items){
		return (items && (moves += 2 * (total + items) - 3)), total + items;
	}, 0), moves;
}

AoC_11(4, 2, 4, 0); // part 1
Aoc_11(8, 2, 4, 0); // part 2 adds 4 extra items on first floor