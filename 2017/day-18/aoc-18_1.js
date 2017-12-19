function aoc_18_1(code){
	var p1 = new prog(0, code.split('\n')),
		ret;
		
	do{ ret = p1.step().next(); } while(!ret.done)

	console.log(ret.value);
}

function prog(id, code){
	var me = this;
	
	this.id = id;
	this.pc = 0;
	this.regs = {};
	this.freq = null;
	
	this.step = function*(){
		var op = code[me.pc].split(' ');
		
		switch(op[0]){
			case 'set':
				me.regs[op[1]] = get(op[2]);
				break;
			case 'add':
				me.regs[op[1]] += get(op[2]);
				break;
			case 'mul':
				me.regs[op[1]] *= get(op[2]);
				break;
			case 'mod':
				me.regs[op[1]] %= get(op[2]);
				break;
			case 'jgz':
				if(get(op[1]) > 0)
					me.pc += get(op[2]) - 1;
				break;
			case 'snd':
				me.freq = get(op[1]);
				break;
			case 'rcv':
				if(get(op[1]) > 0)
					return me.freq;
				break;
		}
		
		me.pc++;
		
		if(me.pc < 0 || me.pc >= code.length)
			return me.freq;
		
		yield;
	}
	
	function get(a){
		return +me.regs[a] || +a || 0;
	}
}

aoc_18_1(`set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 618
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`);
