function aoc_18_2(code){
	code = code.split('\n');
	
	var p = [new prog(0, code), new prog(1, code)],
		ret,
		active = 0;
	
	do{
		ret = p[active].step().next();
		
		if(!ret.done){
			if(typeof ret.value == 'undefined')
				active = 1 - active;
			else if (typeof ret.value == 'number')
				p[1 - active].queue.push(ret.value);
		}
		
		if(p[0].sendCount > 1 && p[1].sendCount > 1 && p[0].queue.length == 0 && p[1].queue.length == 0)
			break;
		
	} while(!ret.done)

	console.log(p[1].sendCount);
}

function prog(id, code){
	var me = this;
	
	this.id = id;
	this.pc = 0;
	this.regs = { p: id };
	this.queue = [];
	this.sendCount = 0;
	
	this.step = function*(){
		var op = code[me.pc].split(' '),
			send = null;
		
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
				me.sendCount++;
				send = get(op[1]);
				break;
			case 'rcv':
				if(me.queue.length)
					me.regs[op[1]] = me.queue.shift();
				else{
					yield;
					me.pc--;
				}
				break;
		}
		
		me.pc++;
		
		if(me.pc < 0 || me.pc >= code.length)
			return;
		
		yield send;
	}
	
	function get(a){
		return +me.regs[a] || +a || 0;
	}
}

aoc_18_2(`set i 31
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
