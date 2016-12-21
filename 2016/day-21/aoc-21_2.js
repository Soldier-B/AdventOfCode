function AoC_21_2(inp, steps){
	return steps.reduceRight(function(data, step){
		step = step.split(' ');
		
		switch(step[0]){
			case 'swap':
				if(step[1] == 'letter')
					swapLetter.call(data, step[2], step[5]);
				else
					swapPos.call(data, +step[2], +step[5]);
				break;
			case 'rotate':
				if(step[1] == 'left')
					rotR.call(data, +step[2]);
				else if(step[1] == 'right')
					rotL.call(data, +step[2]);
				else
					rotPos.call(data, step[6]);
				break;
			case 'reverse':
				rev.call(data, +step[2], +step[4]);
				break;
			case 'move':
				move.call(data, +step[2], +step[5]);
				break;
		}
		
		return data;
	}, inp.split('')).join('');
	
	function swapPos(x, y){ var t = this[x]; this[x] = this[y]; this[y] = t; }
	function swapLetter(x, y){ swapPos.call(this, this.indexOf(x), this.indexOf(y)); }
	function rotL(x){ while(x--) this.push(this.shift()); }
	function rotR(x){ while(x--) this.unshift(this.pop()); }
	function rotPos(x){ rotR.call(this, (x = this.indexOf(x)) % 2 ? 8 - ((x >> 1) + 1) : (x > 0 ? (6 - x) >> 1 : 7)); }
	function rev(x, y){ for(var z = (y - x + 1) >> 1; z--;) swapPos.call(this, x + z, y - z); }
	function move(y, x){ this.splice(y, 0, this.splice(x, 1)[0]); }
}

AoC_21_2('fbgdceah', ['swap letter e with letter h',
'swap letter f with letter g',
'move position 6 to position 3',
'reverse positions 1 through 6',
'swap letter b with letter a',
'swap letter a with letter f',
'rotate based on position of letter e',
'swap position 7 with position 2',
'rotate based on position of letter e',
'swap letter c with letter e',
'rotate based on position of letter f',
'rotate right 6 steps',
'swap letter c with letter f',
'reverse positions 3 through 7',
'swap letter c with letter b',
'swap position 1 with position 2',
'reverse positions 3 through 6',
'swap letter c with letter a',
'rotate left 0 steps',
'swap position 3 with position 0',
'swap letter b with letter e',
'reverse positions 4 through 7',
'move position 1 to position 4',
'swap position 6 with position 3',
'rotate left 6 steps',
'rotate right 0 steps',
'move position 7 to position 3',
'move position 3 to position 4',
'swap position 3 with position 2',
'reverse positions 1 through 6',
'move position 7 to position 5',
'reverse positions 4 through 5',
'rotate based on position of letter g',
'swap position 4 with position 2',
'reverse positions 1 through 5',
'rotate based on position of letter h',
'rotate based on position of letter f',
'rotate based on position of letter b',
'swap position 1 with position 4',
'swap letter b with letter h',
'rotate based on position of letter e',
'swap letter a with letter c',
'swap position 3 with position 5',
'rotate right 6 steps',
'rotate based on position of letter c',
'move position 2 to position 0',
'swap letter b with letter e',
'swap letter g with letter e',
'rotate based on position of letter d',
'swap position 6 with position 5',
'swap letter b with letter c',
'rotate based on position of letter e',
'rotate based on position of letter f',
'rotate based on position of letter f',
'move position 7 to position 0',
'rotate right 1 step',
'rotate right 7 steps',
'swap position 5 with position 6',
'move position 6 to position 7',
'rotate based on position of letter e',
'swap position 3 with position 1',
'swap position 4 with position 3',
'swap letter f with letter a',
'swap position 5 with position 2',
'rotate based on position of letter e',
'rotate left 3 steps',
'rotate left 1 step',
'rotate based on position of letter b',
'rotate left 6 steps',
'rotate based on position of letter b',
'rotate right 7 steps',
'swap position 0 with position 2',
'swap position 7 with position 5',
'rotate left 3 steps',
'reverse positions 4 through 5',
'move position 2 to position 5',
'swap letter c with letter f',
'swap letter g with letter e',
'rotate left 6 steps',
'swap position 4 with position 6',
'rotate based on position of letter h',
'rotate left 2 steps',
'swap letter c with letter a',
'rotate right 3 steps',
'rotate left 6 steps',
'swap letter b with letter f',
'swap position 6 with position 5',
'reverse positions 3 through 4',
'reverse positions 2 through 7',
'swap position 7 with position 4',
'rotate based on position of letter d',
'swap position 5 with position 3',
'swap letter c with letter b',
'swap position 7 with position 6',
'rotate based on position of letter c',
'reverse positions 0 through 7',
'reverse positions 2 through 4',
'rotate based on position of letter f',
'reverse positions 1 through 4',
'rotate right 7 steps']);