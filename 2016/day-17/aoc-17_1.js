// https://github.com/jbt/js-crypto
var md5=function(){for(var m=[],l=0;64>l;)m[l]=0|4294967296*Math.abs(Math.sin(++l));return function(c){var e,g,f,a,h=[];c=unescape(encodeURI(c));for(var b=c.length,k=[e=1732584193,g=-271733879,~e,~g],d=0;d<=b;)h[d>>2]|=(c.charCodeAt(d)||128)<<8*(d++%4);h[c=16*(b+8>>6)+14]=8*b;for(d=0;d<c;d+=16){b=k;for(a=0;64>a;)b=[f=b[3],(e=b[1]|0)+((f=b[0]+[e&(g=b[2])|~e&f,f&e|~f&g,e^g^f,g^(e|~f)][b=a>>4]+(m[a]+(h[[a,5*a+1,3*a+5,7*a][b]%16+d]|0)))<<(b=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*b+a++%4])|f>>>32-b),e,g];for(a=4;a;)k[--a]=k[a]+b[a]}for(c="";32>a;)c+=(k[a>>3]>>4*(1^a++&7)&15).toString(16);return c}}();


function AoC_17_1(key){
	var nodes = [node(1, 1)];
	while(true){
		var found = nodes.filter(function(n){ return n.x * n.y >> 4; });
		if(nodes.length && found.length)
			return found[0].path;
		nodes = nodes.reduce(spawn, []);
	}
	
	function node(x, y, path){ 
		return { x: x, y: y, key: x + ',' + y, path: path || '' }; 
	}
	
	function spawn(nodes, n){
		var hash = md5(key + n.path);
		if(n.y > 1 && parseInt(hash[0], 16) > 10) nodes.push(node(n.x, n.y - 1, n.path + 'U'));
		if(n.y < 4 && parseInt(hash[1], 16) > 10) nodes.push(node(n.x, n.y + 1, n.path + 'D'));
		if(n.x > 1 && parseInt(hash[2], 16) > 10) nodes.push(node(n.x - 1, n.y, n.path + 'L'));
		if(n.x < 4 && parseInt(hash[3], 16) > 10) nodes.push(node(n.x + 1, n.y, n.path + 'R'));
		return nodes;
	}
}

AoC_17_1('yjjvjgan');