function AoC_12_1(){
	var asm = [].slice.call(arguments),
		reg = { a: 0, b: 0, c: 0, d: 0 },
		op = {
			cpy: function(a, b){ reg[b] = +a || reg[a]; },
			inc: function(a) { reg[a]++; },
			dec: function(a) { reg[a]--; },
			jnz: function(a, b){ if(+a || reg[a]) pc += +b - 1; }
		},
		pc = 0;
	
	
	while(pc < asm.length){
		var param = asm[pc++].split(' ');
		op[param.shift()].apply(0, param);
	}
	
	return reg.a;
}

AoC_12_1(
'cpy 1 a',
'cpy 1 b',
'cpy 26 d',
'jnz c 2',
'jnz 1 5',
'cpy 7 c',
'inc d',
'dec c',
'jnz c -2',
'cpy a c',
'inc a',
'dec b',
'jnz b -2',
'cpy c b',
'dec d',
'jnz d -6',
'cpy 19 c',
'cpy 14 d',
'inc a',
'dec d',
'jnz d -2',
'dec c',
'jnz c -5'
);