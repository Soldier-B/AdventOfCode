function aoc_11(pw){
	pw = pw.split('').map(function(c){ return c.charCodeAt(0) - 97; });
	
	do { inc(); } while (!isValid())
		
	return pw.map(function(c){ return String.fromCharCode(c + 97); }).join('');
	
	function inc(){
		var i = pw.length - 1, j, l;
			
		do {
			j = pw[i] + 1;
			l = 0;

			if(j == 8 || j == 11 || j == 14) j++;
			
			l = Math.floor(j / 26);
			j %= 26;
			pw[i--] = j;
		} while(l > 0)
	}
	
	function isValid(){
		return pw.some(function(c, i, a){
				return (i < a.length - 2) && c == a[i + 1] - 1 && c == a[i + 2] - 2;
			}) && /(.)\1.*(.)\2/.test(pw.map(function(c){ return String.fromCharCode(c + 97); }).join(''))
	}
}

// part 1
aoc_11('hxbxwxba');
// part 2
aoc_11('hxbxxyzz');
