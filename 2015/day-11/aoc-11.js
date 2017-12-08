function aoc_11(pw){
	pw = base26(pw);
	
	do { next(); } while (!valid())
		
	return base26(pw);
	
	function base26(a){
		if(a instanceof Array)
			return a.map(function(b){ return String.fromCharCode(b + 97); }).join('');
		return a.split('').map(function(b){ return b.charCodeAt(0) - 97; });
	}

	function next(){
		var i = pw.length - 1, j, l;
			
		do {
			j = pw[i] + 1;
			if(j == 8 || j == 11 || j == 14) j++;
			l = Math.floor(j / 26);
			pw[i--] = j % 26;
		} while(l)
	}
	
	function valid(){
		return pw.some(function(c, i, a){
				return (i < a.length - 2) && c == a[i + 1] - 1 && c == a[i + 2] - 2;
			}) && /(.)\1.*(.)\2/.test(base26(pw));
	}
}

// part 1
aoc_11('hxbxwxba');
// part 2
aoc_11('hxbxxyzz');
